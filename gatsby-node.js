const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const Resume = path.resolve('./src/templates/Resume.tsx');

  const result = await graphql(
    `
      {
        allMdx {
          nodes {
            id
            slug
          }
        }
      }
    `,
  );

  if (result.errors) {
    reporter.panicOnBuild('There was an error loading resume', result.errors);
    return;
  }

  const resume = result.data.allMdx.nodes;

  if (resume.length > 0) {
    resume.forEach((r) => {
      createPage({
        path: r.slug === 'ko' ? '/resume/' : `/${r.slug}/resume/`,
        component: Resume,
        context: {
          id: r.id,
        },
      });
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type SitePageContext {
      language: String!
    }
  `);
};

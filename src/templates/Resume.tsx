import React from 'react';

import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ResumeQuery } from '../../graphql-types';
import { SEO } from '../components';

interface IResumeTemplateProps {
  data: ResumeQuery;
}

const shortcodes = {};

export default function ResumeTemplate({
  data: { mdx },
}: IResumeTemplateProps) {
  if (!mdx) {
    return null;
  }
  return (
    <>
      <SEO title="Resume" />
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </>
  );
}

export const pageQuery = graphql`
  query Resume($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`;

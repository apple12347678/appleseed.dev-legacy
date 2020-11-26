import React from 'react';

import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link as I18nLink } from 'gatsby-plugin-react-i18next';

import { ResumeQuery } from '../../graphql-types';
import GithubIcon from '../assets/github.svg';
import InstagramIcon from '../assets/instagram.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import MailIcon from '../assets/mail.svg';
import ProfileImage from '../assets/profile.png';
import { SEO } from '../components';

const AvatarImg = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 130px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 720px) {
    width: 120px;
    height: 120px;
    border-radius: 60px;
  }
`;

function Avatar() {
  return <AvatarImg alt="profile" src={ProfileImage} />;
}

const Root = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 720px) {
    justify-content: center;
  }
`;

const ProfileWrapper = styled.div`
  height: 100%;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 720px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--color-100);
  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: var(--color-300);
  @media (max-width: 960px) {
    font-size: 1.3rem;
  }
`;

const Link = styled.a`
  height: 32px;
  margin-right: 2px;
`;

const IconWrapper = styled.img<{ $padding?: number }>`
  ${(props) =>
    props.$padding
      ? `
    width: ${32 - props.$padding * 2}px;
    height: ${32 - props.$padding * 2}px;
    padding: ${props.$padding}px;
  `
      : `
    width: 32px;
    height: 32px;
  `}
`;

function Profile() {
  return (
    <ProfileWrapper>
      <Title>Chankyu Kang</Title>
      <Subtitle>appleseed • apple12347678</Subtitle>
      <Row>
        <Link href="https://github.com/apple12347678/">
          <IconWrapper alt="github" width="32" height="32" src={GithubIcon} />
        </Link>
        <Link href="mailto:apple12347678@gmail.com">
          <IconWrapper
            alt="mail"
            width="32"
            height="32"
            $padding={2}
            src={MailIcon}
          />
        </Link>
        <Link href="https://www.instagram.com/apple12347678/">
          <IconWrapper
            alt="instagram"
            width="32"
            height="32"
            $padding={5}
            src={InstagramIcon}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/%EC%B0%AC%EA%B7%9C-%EA%B0%95-681054190/">
          <IconWrapper
            alt="linkedin"
            width="32"
            height="32"
            $padding={5}
            src={LinkedInIcon}
          />
        </Link>
      </Row>
    </ProfileWrapper>
  );
}

const Updated = styled.p`
  font-size: 0.9rem;
  color: var(--color-400);
`;

const shortcodes = { Root, Avatar, Profile, Updated };

const Wrapper = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 4rem 2.5rem;
  @media (max-width: 720px) {
    padding: 2rem 2rem 1rem;
  }
`;

const GoBack = styled.div`
  margin-top: 20px;
  text-align: right;
  font-size: 0.9rem;
`;

interface IResumeTemplateProps {
  data: ResumeQuery;
}

export default function ResumeTemplate({
  data: { mdx },
}: IResumeTemplateProps) {
  if (!mdx) {
    return null;
  }
  return (
    <>
      <SEO title="Resume" />
      <Wrapper>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <GoBack>
          <I18nLink to="/">← Go back</I18nLink>
        </GoBack>
      </Wrapper>
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

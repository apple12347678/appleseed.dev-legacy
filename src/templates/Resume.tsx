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
import { ThemeProps } from '../styles/theme';

const AvatarImg = styled.img`
  width: 260px;
  height: 260px;
  margin-right: 60px;
  border-radius: 130px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
`;

function Avatar() {
  return (
    <AvatarImg alt="profile" width="260" height="260" src={ProfileImage} />
  );
}

const Root = styled.div<ThemeProps>`
  margin-bottom: 40px;
`;

const Row = styled.div`
  display: flex;
`;

const ProfileWrapper = styled.div<ThemeProps>`
  display: inline-block;
`;

const Title = styled.h1<ThemeProps>`
  font-size: 3rem;
  color: ${(props) => props.theme.colors[100]};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p<ThemeProps>`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors[300]};
  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 1.3rem;
  }
`;

const Link = styled.a`
  height: 40px;
  margin-right: 4px;
`;

const IconWrapper = styled.img<{ $full?: boolean }>`
  ${(props) =>
    props.$full
      ? `
    width: 32px;
    height: 32px;
    padding: 4px;
  `
      : `
    width: 40px;
    height: 40px;
  `}
`;

function Profile() {
  return (
    <ProfileWrapper>
      <Title>Chankyu Kang</Title>
      <Subtitle>appleseed • apple12347678</Subtitle>
      <Row>
        <Link href="https://github.com/apple12347678/">
          <IconWrapper width="40" height="40" src={GithubIcon} />
        </Link>
        <Link href="mailto:apple12347678@gmail.com">
          <IconWrapper width="40" height="40" src={MailIcon} />
        </Link>
        <Link href="https://www.instagram.com/apple12347678/">
          <IconWrapper width="40" height="40" $full src={InstagramIcon} />
        </Link>
        <Link href="https://www.linkedin.com/in/%EC%B0%AC%EA%B7%9C-%EA%B0%95-681054190/">
          <IconWrapper width="40" height="40" $full src={LinkedInIcon} />
        </Link>
      </Row>
    </ProfileWrapper>
  );
}

const Updated = styled.p<ThemeProps>`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors[400]};
`;

const shortcodes = { Root, Avatar, Profile, Updated };

const Wrapper = styled.div<ThemeProps>`
  max-width: ${(props) => props.theme.breakpoints.sm}px;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 60px 40px;
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

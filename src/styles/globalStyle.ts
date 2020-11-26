import { css } from '@emotion/core';

import { Theme } from './theme';

export const getGlobalStyle = (theme: Theme) => css`
  html {
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-size: 16px;
    line-height: 1.75;
    color: ${theme.colors[100]};
    @media (max-width: ${theme.breakpoints.sm}px) {
      font-size: 14px;
    }
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  *::selection {
    color: ${theme.colors[900]};
    background-color: ${theme.colors[100]};
  }

  a {
    color: ${theme.colors[400]};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h1,
  h2 {
    font-weight: 600;
    margin-block-start: 0.5em;
    margin-block-end: 0.25em;
  }
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin-block-start: 0.25em;
    margin-block-end: 0.15em;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.3rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    font-size: 1rem;
    color: ${theme.colors[200]};
  }

  li {
    margin: 0;
    margin-block-start: 0.3em;
    margin-block-end: 0.3em;
  }
`;

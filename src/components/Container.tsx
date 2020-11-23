import styled from '@emotion/styled';

import { ThemeProps } from '../styles/theme';

export default styled.div<ThemeProps>`
  min-height: 100vh;
  max-width: ${(props) => props.theme.breakpoints.sm}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

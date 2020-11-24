import styled from '@emotion/styled';

import { ThemeProps } from '../styles/theme';

export default styled.div<ThemeProps>`
  min-height: calc(100vh - 25px - 3rem);
  max-width: ${(props) => props.theme.breakpoints.sm}px;
  display: flex;
  align-items: center;
`;

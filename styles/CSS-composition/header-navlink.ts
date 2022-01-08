import { css } from "@emotion/react";
import appTheme from "../appTheme";

const headerNavLinkStyle = css`
  all: unset;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 8px 16px;
  color: ${appTheme.colors.primary.darker};
  font-weight: bolder;
  text-decoration: none;
  border-radius: 2px;

  &:hover {
    color: inherit;
    text-decoration: none;
    background: ${appTheme.colors.tertiary.lighter};
  }
`;

export default headerNavLinkStyle;

import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

// Title
const StyledH1 = styled.h1`
  padding: 8px;
  font-weight: bolder;
  font-size: clamp(2em, 5vw, 1em);
  letter-spacing: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  background-color: ${appTheme.colors.secondary.default};
  border-radius: 4px;
  box-shadow: ${appTheme.elevation.xl};
`;

export default StyledH1;

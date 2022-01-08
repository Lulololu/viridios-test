import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${appTheme.globalMaxWidth};
  height: 100%;
`;

export default StyledSection;

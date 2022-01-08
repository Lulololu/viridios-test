import styled from "@emotion/styled";
import StyledH1 from "../../StyledComponents/StyledH1";
import EarthIcon from "./EarthIcon";
import appTheme from "../../../styles/appTheme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: none; /* Hide Earth Icon on small devices */

  @media ${appTheme.queries.tabletAndUp} {
    display: flex;
  }
`;

const PageTitle = () => {
  return (
    <Container>
      <IconWrapper>
        <EarthIcon width="96px" color={appTheme.colors.primary.darker} />
      </IconWrapper>
      <StyledH1>From Earth to Data</StyledH1>
    </Container>
  );
};

export default PageTitle;

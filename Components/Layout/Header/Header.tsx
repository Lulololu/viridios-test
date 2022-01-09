import styled from "@emotion/styled";
import appTheme from "../../../styles/appTheme";
import NavBar from "./NavBar";
import ViridiosLogo from "./ViridiosLogo";

/* Comment Test */
const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 16px;
  background: ${appTheme.colors.secondary.default};

  @media (min-width: calc(${appTheme.globalMaxWidth} + 96px)) {
    padding: 0;
  }

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

const NavbarContainer = styled.div``;

const Header = () => {
  return (
    <HeaderContainer>
      <ViridiosLogo />
      <NavbarContainer>
        <NavBar />
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Header;

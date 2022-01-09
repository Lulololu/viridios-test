import styled from "@emotion/styled";
import NextLink from "next/link";
import { useRouter } from "next/router";
import appTheme from "../../../styles/appTheme";
import logoBounce from "../../../styles/animation";
import headerNavLinkStyle from "../../../styles/CSS-composition/header-navlink";
import { navLinks } from "../../../data/navLinks";

const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Li = styled.li`
  width: max-content;
  list-style: none;
  cursor: pointer;
`;

const Link = styled.a<{ isActivePath: boolean }>`
  ${headerNavLinkStyle}

  &::after {
    position: relative;
    width: 100%;
    height: 2px;
    background: ${({ isActivePath }) =>
      isActivePath ? appTheme.colors.tertiary.lighter : "inherit"};
    border-radius: 2px;
    content: "";
  }

  &:focus {
    outline: 5px auto ${appTheme.colors.tertiary.default};
  }
`;

const NavBar = () => {
  const router = useRouter();

  const navLinksArr = Object.values(navLinks);

  return (
    <Nav>
      <List>
        {navLinksArr.map((navLink, index) => (
          <Li key={`${index}-${navLink.href}`}>
            <NextLink href={navLink.href} passHref>
              <Link isActivePath={router.route === navLink.href}>
                {navLink.name}
              </Link>
            </NextLink>
          </Li>
        ))}
      </List>
    </Nav>
  );
};

export default NavBar;

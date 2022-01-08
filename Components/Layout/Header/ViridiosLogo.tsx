import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import styled from "@emotion/styled";
import { navLinks } from "../../../data/navLinks";
import logoBounce from "../../../styles/animation";
import appTheme from "../../../styles/appTheme";

const ImageWrapper = styled.div`
  position: relative;
  width: 104px;
  height: 24px;
  background: ${appTheme.colors.secondary.lighter};
  border-radius: 2px;
  cursor: pointer;
  transition: transform, opacity, 250ms ease;

  &:hover {
    animation: ${logoBounce} 250ms ease;
  }
`;

const ViridiosLogo = () => {
  return (
    <ImageWrapper>
      <NextLink href={navLinks.sustainableDevelopmentGoals.href} passHref>
        <a>
          <Image src="/viridios-logo.svg" alt="Viridios Logo" layout="fill" />
        </a>
      </NextLink>
    </ImageWrapper>
  );
};

export default ViridiosLogo;

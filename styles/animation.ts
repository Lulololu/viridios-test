import { keyframes } from "@emotion/react";

const logoBounce = keyframes`
  0%, 100% {
    transform: translateY(0);

  }

  50% {
    transform: translateY(-10%);
  }
`;

export default logoBounce;

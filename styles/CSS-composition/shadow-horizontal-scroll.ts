import { css } from "@emotion/react";

/* https://codepen.io/matthewbeta/pen/fzoHI */

const shadowOnHorizontalScroll = css`
  background-color: white;
  background-image: /* Shadows */ linear-gradient(to right, white, white),
    linear-gradient(to right, white, white),
    /* Shadow covers */
      linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0)),
    linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
  background-repeat: no-repeat;
  background-position: left center, right center, left center, right center;
  background-size: 20px 100%, 20px 100%, 10px 100%, 10px 100%;
  background-attachment: local, local, scroll, scroll;
`;

export default shadowOnHorizontalScroll;

import { css } from "@emotion/react";

const colors = css`
  /* Primary Color */
  --color-primary-darker: #1c681b;
  --color-primary-dark: #539c47;
  --color-primary-default: #a3da8d;
  --color-primary-light: #d6f3c0;
  --color-primary-lighter: #f5fdeb;

  /* Secondary Color */
  --color-secondary-darker: hsl(42, 54%, 31%);
  --color-secondary-dark: hsl(44, 38%, 55%);
  --color-secondary-default: hsl(47, 100%, 87%);
  --color-secondary-light: hsl(50, 100%, 92%);
  --color-secondary-lighter: hsl(51, 100%, 97%);

  /* Tertiary Color */
  --color-tertiary-darker: hsl(23, 61%, 28%);
  --color-tertiary-dark: hsl(28, 41%, 48%);
  --color-tertiary-default: hsl(33, 80%, 76%);
  --color-tertiary-light: hsl(39, 88%, 87%);
  --color-tertiary-lighter: hsl(45, 91%, 96%);

  /* Goals Colors */
  --color-green-goal: hsl(151 55% 41.5%);
  --color-yellow-goal: hsl(53 92% 50%);
  --color-orange-goal: hsl(24 94% 50%);
  --color-red-goal: hsl(358 75% 59%);
  --color-grey-goal: hsl(0 0% 56.1%);

  /* Black */
  --color-black-default: #1f2643;

  /* White */
  --color-white-default: #ffffff;

  /* Text Color */
  --color-text-default: var(--color-black-default);

  /* Selection */
  --color-selection: var(--color-white-default);
  --color-selection-background: var(--color-primary-default);

  /* Gradients */
  --gradient-1: linear-gradient(
    360deg,
    rgba(99, 39, 39, 0.0035) 0%,
    rgba(37, 67, 136, 0.1) 52.16%,
    rgba(107, 180, 221, 0) 92.38%
  );
`;

export default colors;

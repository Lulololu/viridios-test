/* - AppTheme -
 * This Theme is a JavaScript Object, in order to get the typing autocomplete/type
 * safety :
 * 1 - It contains the references to the CSS Variables ;
 * 2 - The theme also contains, among other values, the Media
 * Queries, because CSS Variables can NOT be used with Media Queries.
 * because CSS Variables can NOT be used with Media Queries;
 * 3 - It can be used as Emotion Theme also.
 *  */

// Breakpoints
const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

// Queries
const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
};

const appTheme = {
  colors: {
    primary: {
      darker: "var(--color-primary-darker)",
      dark: "var(--color-primary-dark)",
      default: "var(--color-primary-default)",
      light: "var(--color-primary-light)",
      lighter: "var(--color-primary-lighter)",
    },
    secondary: {
      darker: "var(--color-secondary-darker)",
      dark: "var(--color-secondary-dark)",
      default: "var(--color-secondary-default)",
      light: "var(--color-secondary-light)",
      lighter: "var(--color-secondary-lighter)",
    },
    tertiary: {
      darker: "var(--color-tertiary-darker)",
      dark: "var(--color-tertiary-dark)",
      default: "var(--color-tertiary-default)",
      light: "var(--color-tertiary-light)",
      lighter: "var(--color-tertiary-lighter)",
    },
    green: "var(--color-green-goal)",
    yellow: "var(--color-yellow-goal)",
    orange: "var(--color-orange-goal)",
    red: "var(--color-red-goal)",
    grey: "var(--color-grey-goal)",
    black: "var(--color-black-default)",
    white: "var(--color-white-default)",
    textDefault: "var(--color-text-default)",
    selection: "var(--color-selection)",
    selectionBackground: "var(--color-selection-background)",
  },

  fontWeight: {
    light: "var(--font-weight-light)",
    medium: "var(--font-weight-medium)",
    bold: "var(--font-weight-bold)",
  },

  fontSize: {
    xs: "var(--font-size-xs)",
    sm: "var(--font-size-sm)",
    md: "var(--font-size-md)",
    lg: "var(--font-size-lg)",
    xl: "var(--font-size-xl)",
    xl2: "var(--font-size-xl2)",
    xl3: "var(--font-size-xl3)",
    xl4: "var(--font-size-xl4)",
    xl5: "var(--font-size-xl5)",
    xl6: "var(--font-size-xl6)",
    xl7: "var(--font-size-xl7)",
    xl8: "var(--font-size-xl8)",
    xl9: "var(--font-size-xl9)",
  },

  fontFamily: {
    openSans: "var(--font-family-1)",
    alternativeFonts: "var(--alternative-fonts)",
  },

  elevation: {
    sm: "var(--elevation-1)",
    md: "var(--elevation-2)",
    lg: "var(--elevation-3)",
    xl: "var(--elevation-4)",
  },

  /* OTHERS */
  globalMinWidth: "320px",
  globalMaxWidth: "1440px",
  tableMaxWidth: "800px",
  headerHeight: "96px",
  queries: QUERIES,
};

export default appTheme;

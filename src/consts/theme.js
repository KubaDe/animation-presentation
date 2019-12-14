import createTheme from 'spectacle/lib/themes/default';

const theme = {
  colors: {
    grey900: "#1f1e1f",
    grey800: "#212121",
    grey700: "#303030",
    grey600: "#434543",
    grey500: "#454545",
    grey400: "#777777",
    grey300: "#b8b8b8",
    grey200: "#ededed",
    grey100: "#f2f2f2",
    green: "#0ad560",
    darkGreen: "#38803A",
    blue: "#00e7ff",
  }
}

export const spectacleTheme =  createTheme(
  {
    primary: theme.colors.grey100,
    secondary: theme.colors.green,
    tertiary: theme.colors.grey100,
    quaternary: theme.colors.grey100,
  },
  {
    primary: 'Source Sans Pro',
    secondary: 'Helvetica',
  }
);

export default theme

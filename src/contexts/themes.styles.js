import { blueGrey, grey } from '@material-ui/core/colors';

export const lightTheme = {
  palette: {
    type: 'light',
    primary: blueGrey,
    // primary: {
    //   light: blueGrey[300],
    //   main: blueGrey[700],
    // },
    secondary: {
      main: grey[50],
    },

    text: {
      primary: blueGrey[800],
      secondary: blueGrey[600],
    },

    background: {
      paper: grey[50],
      default: grey[50],
    },
  },

  typography: {
    fontFamily: `'Lato', 'Open Sans', 'Roboto', sans-serif`,

    button: {
      textTransform: 'none',
    },
  },
};

export const darkTheme = {
  palette: {
    type: 'dark',
    primary: blueGrey,
    secondary: {
      main: grey[900],
    },

    text: {
      primary: blueGrey[200],
      secondary: blueGrey[300],
    },

    background: {
      paper: grey[900],
      default: grey[900],
    },
  },

  typography: {
    fontFamily: `'Lato', 'Open Sans', 'Roboto', sans-serif`,

    button: {
      textTransform: 'none',
    },
  },
};

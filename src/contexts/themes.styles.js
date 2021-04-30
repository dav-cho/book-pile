import { blueGrey } from '@material-ui/core/colors';

export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#fefefe',
    },
    secondary: blueGrey,

    text: {
      primary: '#212121',
    },

    background: {
      paper: '#fefefe',
      default: '#fefefe',
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
    primary: {
      main: '#212121',
    },
    secondary: blueGrey,

    text: {
      primary: '#fefefe',
    },

    background: {
      paper: '#212121',
      default: '#212121',
    },
  },

  typography: {
    fontFamily: `'Lato', 'Open Sans', 'Roboto', sans-serif`,

    button: {
      textTransform: 'none',
    },
  },
};

import { blueGrey } from '@material-ui/core/colors';

export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#fefefe',
    },
    // secondary: blueGrey,
    // secondary: {
    //   main: '#455a64',
    // },
    secondary: {
      main: '#37474f',
    },

    // text: {
    //   primary: '#212121',
    // },
    text: {
      primary: '#263238',
    },
    // text: {
    //   primary: '#37474f',
    // },

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

    // text: {
    //   primary: '#fefefe',
    // },
    text: {
      primary: '#90a4ae',
    },
    // text: {
    //   primary: '#cfd8dc',
    // },

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

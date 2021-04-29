import { createContext, useContext, useState } from 'react';

import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
// import { grey, blueGrey } from '@material-ui/core/colors';

const ThemeContext = createContext({
  theme: null,
  toggleTheme: () => {},
});

export const UseThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const lightTheme = {
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

  const darkTheme = {
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

  const [theme, setTheme] = useState(true);
  const activeTheme = createMuiTheme(theme ? lightTheme : darkTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </CssBaseline>
    </ThemeProvider>
  );
};

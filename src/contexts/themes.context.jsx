import { createContext, useContext, useState } from 'react';
// import { createContext, useContext, useState, useMemo } from 'react';

import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
  // useMediaQuery,
} from '@material-ui/core';

import { lightTheme, darkTheme } from './themes.styles';

const ThemesContext = createContext({
  theme: null,
  toggleTheme: () => {},
});

export const UseThemesContext = () => useContext(ThemesContext);

export const ThemesContextProvider = ({ children }) => {
  const [themeType, setThemeType] = useState(true);
  const activeTheme = createMuiTheme(themeType ? lightTheme : darkTheme);
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // console.log('~ prefersDarkMode', prefersDarkMode);

  const toggleTheme = () => {
    setThemeType(prevThemeType => !prevThemeType);
  };

  return (
    <CssBaseline>
      <ThemeProvider theme={activeTheme}>
        <ThemesContext.Provider value={{ themeType, toggleTheme }}>
          {children}
        </ThemesContext.Provider>
      </ThemeProvider>
    </CssBaseline>
  );
};

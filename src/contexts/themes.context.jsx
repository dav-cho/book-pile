import { createContext, useContext, useState } from 'react';

import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
// import { blueGrey } from '@material-ui/core/colors';
// import { grey, blueGrey } from '@material-ui/core/colors';

import { lightTheme, darkTheme } from './themes.styles';

const ThemesContext = createContext({
  theme: null,
  toggleTheme: () => {},
});

export const UseThemesContext = () => useContext(ThemesContext);

export const ThemesContextProvider = ({ children }) => {
  const [themeType, setThemeType] = useState(true);
  const activeTheme = createMuiTheme(themeType ? lightTheme : darkTheme);

  const toggleTheme = () => {
    setThemeType(prevThemeType => !prevThemeType);
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline>
        <ThemesContext.Provider value={{ themeType, toggleTheme }}>
          {children}
        </ThemesContext.Provider>
      </CssBaseline>
    </ThemeProvider>
  );
};
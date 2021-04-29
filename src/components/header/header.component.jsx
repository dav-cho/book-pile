import { NavLink } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  // Drawer,
} from '@material-ui/core';
import {
  FiberManualRecord,
  Brightness4,
  BrightnessHigh,
  // Brightness3,
  // Brightness2,
} from '@material-ui/icons';

import { useStyles } from './header.styles';
import { UseThemeContext } from '../../contexts/theme.context';
import { Search } from '../search/search.component';

export const Header = () => {
  const { theme, toggleTheme } = UseThemeContext();
  const { appBar, search } = useStyles();

  return (
    <>

      <AppBar className={appBar}>
        <Toolbar>
          {/* <div className="header-left"> */}
          <Button color="secondary">
            <FiberManualRecord />
            <Typography variant="h5">menu</Typography>
          </Button>
          <span className="search-container">
            <Search className={search} />
          </span>
          {/* </div> */}

          <ul className="nav-links">
            <NavLink to="/home">
              <li>home</li>
            </NavLink>
            <NavLink to="/about">
              <li>about</li>
            </NavLink>
            <IconButton onClick={toggleTheme} color="secondary">
              {theme ? <Brightness4 /> : <BrightnessHigh />}
            </IconButton>
          </ul>
        </Toolbar>
      </AppBar>
    </>
  );
};

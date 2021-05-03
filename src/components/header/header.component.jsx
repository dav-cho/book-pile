import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Link,
  Hidden,
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';

import { useStyles } from './header.styles';
import { UseThemesContext } from '../../contexts/themes.context';
import { NavDrawer } from '../nav-drawer/nav-drawer.component';
import { Search } from '../search/search.component';

const navLinks = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
];

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = UseThemesContext();
  const currentPath = useLocation().pathname;

  const toggleDrawer = e => {
    setDrawerOpen(prevDrawerState => !prevDrawerState);
  };

  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftContainer}>
            <Button className={classes.menuButton} onClick={toggleDrawer}>
              <FiberManualRecordIcon className={classes.menuIcon} />
              <Typography className={classes.menuText} variant="h5">
                menu
              </Typography>
            </Button>
            {currentPath !== '/' && (
              <Hidden xsDown>
                <Search isHomePage={false} />
              </Hidden>
            )}
          </div>

          {currentPath !== '/' && (
            <Link className={classes.titleLink} component={NavLink} to="/">
              <Typography className={classes.title} variant="h2">
                book.pile
              </Typography>
            </Link>
          )}

          <div className={classes.navLinksContainer}>
            {navLinks.map(link => {
              const { name, path } = link;

              return (
                <Link
                  className={classes.navLink}
                  component={NavLink}
                  to={path}
                  key={name}
                  variant="h5"
                >
                  {name}
                </Link>
              );
            })}
            <IconButton className={classes.themeButton} onClick={toggleTheme}>
              {theme ? <Brightness4Icon /> : <BrightnessHighIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <NavDrawer openState={drawerOpen} />
    </>
  );
};

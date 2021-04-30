// import { useState, createRef } from 'react';
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
import { Drawer } from '../drawer/drawer.component';
import { Search } from '../search/search.component';

const navDrawerItems = [
  {
    name: 'home',
  },
  {
    name: 'about',
  },
  {
    name: 'options',
  },
  {
    name: 'help',
  },
];

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
  const classes = useStyles();

  const toggleDrawer = e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    } else setDrawerOpen(prevDrawerState => !prevDrawerState);
  };

  return (
    <AppBar color="secondary" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.navBar}>
        <div className={classes.navLeftContainer}>
          <Button onClick={toggleDrawer} className={classes.menuButton}>
            <FiberManualRecordIcon />
            <Typography variant="h5">menu</Typography>
          </Button>
          <div onClick={toggleDrawer}>
            <Drawer
              items={navDrawerItems}
              openState={drawerOpen}
              toggleDrawer={toggleDrawer}
            />
          </div>
          {currentPath !== '/' && <Search />}
        </div>

        <Hidden smDown>
          {currentPath !== '/' && (
            <Link
              component={NavLink}
              to="/"
              variant="h2"
              color="textSecondary"
              underline="none"
            >
              book.pile
            </Link>
          )}
        </Hidden>

        <div className={classes.navLinksContainer}>
          {navLinks.map(link => {
            const { name, path } = link;

            return (
              <Link
                component={NavLink}
                to={path}
                variant="h5"
                color="textPrimary"
                className={classes.navLink}
                key={name}
              >
                {name}
              </Link>
            );
          })}
          <IconButton onClick={toggleTheme} color="primary">
            {theme ? <Brightness4Icon /> : <BrightnessHighIcon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

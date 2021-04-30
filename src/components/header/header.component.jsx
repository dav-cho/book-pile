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
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.leftContainer}>
          <Button className={classes.menuButton} onClick={toggleDrawer}>
            <FiberManualRecordIcon className={classes.menuIcon} />
            <Typography className={classes.menuText} variant="h5">
              menu
            </Typography>
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
            <Link className={classes.titleLink} component={NavLink} to="/">
              <Typography className={classes.title} variant="h2">
                book.pile
              </Typography>
            </Link>
          )}
        </Hidden>

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
  );
};

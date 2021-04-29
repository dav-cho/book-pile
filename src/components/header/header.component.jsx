import { NavLink} from 'react-router-dom';
// import { NavLink, useHistory } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  // Drawer,
} from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';

import { useStyles } from './header.styles';
import { UseThemeContext } from '../../contexts/theme.context.jsx';
import { Search } from '../search/search.component';

export const Header = () => {
  const { theme, toggleTheme } = UseThemeContext();
  const classes = useStyles();
  // const history = useHistory();
  // console.log('~ history', history);

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

  return (
    <AppBar elevation={0} className={classes.appBar}>
      <Toolbar className={classes.navBar}>
        <div className={classes.navLeft}>
          <Button color="secondary" className={classes.menuButton}>
            <FiberManualRecordIcon />
            <Typography variant="h5">menu</Typography>
          </Button>
          <Search />
        </div>

        <NavLink to="/" className={classes.titleLink}>
          <Typography variant="h1" className={classes.title}>
            book.pile
          </Typography>
        </NavLink>

        <div className={classes.navLinksContainer}>
          {navLinks.map(link => {
            const { name, path } = link;

            return (
              <NavLink to={path} className={classes.navLink} key={name}>
                <Typography className={classes.navLinkText}>{name}</Typography>
              </NavLink>
            );
          })}
          <IconButton onClick={toggleTheme} color="secondary">
            {theme ? <Brightness4Icon /> : <BrightnessHighIcon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

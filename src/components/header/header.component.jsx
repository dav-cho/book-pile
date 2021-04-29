import { NavLink } from 'react-router-dom';

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
import { UseThemeContext } from '../../contexts/theme.context';
import { Search } from '../search/search.component';

export const Header = () => {
  const { theme, toggleTheme } = UseThemeContext();
  const classes = useStyles();

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

        <Typography variant="h1" className={classes.title}>
          book.pile
        </Typography>

        <div className={classes.navLinksContainer}>
          <NavLink to="/home" className={classes.navLink}>
            <Typography className={classes.navLinkText}>home</Typography>
          </NavLink>
          <NavLink to="/about" className={classes.navLink}>
            <Typography className={classes.navLinkText}>about</Typography>
          </NavLink>
          <IconButton onClick={toggleTheme} color="secondary">
            {theme ? <Brightness4Icon /> : <BrightnessHighIcon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

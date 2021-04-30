import { Drawer, List } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const StyledDrawer = withStyles({
  paperAnchorTop: {
    top: '5rem',
    display: 'flex',
    // borderTop: '0.5rem solid #78909c',
    borderTop: '0.5rem solid #607d8b',
  },

  modal: {
    // position: 'relative',
    // top: '10rem',
    // zIndex: -1,
  },
})(Drawer);

export const useStyles = makeStyles(() => ({
  drawerList: {
    display: 'flex',
    padding: 0,
    paddingBottom: '0.2rem',
  },

  listOption: {
    //
  },

  listItemText: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'flex-end',
  },
}));

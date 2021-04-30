import { Drawer } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

export const StyledDrawer = withStyles({
  root: {
    position: 'absolute',
    // top: '6rem',
    zIndex: 0,
    marginTop: '6rem',
    // '& .MuiDrawer-root': {
    //   top: '6rem',
    // },

    '& .MuiBackdrop-root': {
      top: '6rem',
    },
  },

  paperAnchorTop: {
    top: '6rem',
    display: 'flex',
    // borderTop: '0.5rem solid #78909c',
    borderTop: '0.5rem solid #455a64',
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

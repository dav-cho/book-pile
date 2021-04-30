import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  appBar: {
    position: 'static',
    // position: 'relative',
    zIndex: 10,
  },

  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1rem',
  },

  navLeftContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },

  menuButton: {
    marginRight: '1.5rem',
  },

  navLinksContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  navLink: {
    margin: '0 1rem',
  },

  themeButton: {
    //
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  appBar: {
    position: 'static',
    // position: 'sticky',
  },

  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  navLeft: {
    display: 'flex',
    alignItems: 'center',
  },

  menuButton: {
    marginRight: '1.5rem',
  },

  title: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 400,
    fontFamily: 'Open Sans',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },

  navLinksContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  navLink: {
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '1rem',
    color: '#212121',
  },

  navLinkText: {
    fontSize: '1.5rem',
  },
}));

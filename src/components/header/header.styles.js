import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  appBar: {
    position: 'static',
    // position: 'sticky',
  },

  navBar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1rem',
  },

  navLeft: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },

  menuButton: {
    marginRight: '1.5rem',
  },

  titleLink: {
    textDecoration: 'none',
    color: '#212121',
  },

  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 400,
    fontFamily: 'Open Sans',
  },

  navLinksContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
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

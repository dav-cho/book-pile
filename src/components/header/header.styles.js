import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  appBar: {
    //   zIndex: 10,
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
  },

  toolBar: {
    margin: '0 1rem',
    padding: 0,
  },

  leftContainer: {
    flex: 1,
    display: 'flex',
  },

  menuButton: {
    marginRight: '1rem',
    padding: 0,
  },

  menuIcon: {
    fontSize: '1.75rem',
    color: theme.palette.text.secondary,
  },

  menuText: {
    marginLeft: '0.5rem',
    marginBottom: '0.25rem',
  },

  titleLink: {
    color: theme.palette.text.primary,
    '&:hover': {
      textDecoration: 'none',
    },
  },

  title: {
    margin: '0.5rem',
    fontSize: '3.25rem',
    fontWeight: 300,
  },

  navLinksContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  navLink: {
    margin: '0 1rem',
    color: theme.palette.text.primary,
  },

  themeButton: {
    color: theme.palette.text.secondary,
  },
}));

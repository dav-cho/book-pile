import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    padding: '0.5rem 0',
    backgroundColor: theme.palette.secondary.main,
  },

  toolBar: {
    height: '4rem',
    padding: 0,
  },

  leftContainer: {
    flex: 1,
    display: 'flex',
  },

  menuButton: {
    marginRight: '0.5rem',
    padding: '0 1rem',
  },

  menuIcon: {
    fontSize: '1.75rem',
    color: theme.palette.divider,
  },

  menuText: {
    marginLeft: '0.5rem',
    marginBottom: '0.25rem',
  },

  titleLink: {
    marginBottom: '0.1rem',
    color: theme.palette.text.primary,

    '&:hover': {
      textDecoration: 'none',
    },

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'inline-block',
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

    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  navLink: {
    margin: '0 1rem',
    paddingBottom: '0.25rem',
    color: theme.palette.text.primary,
  },

  themeButton: {
    color: theme.palette.divider,
    padding: '0 1rem',
  },
}));

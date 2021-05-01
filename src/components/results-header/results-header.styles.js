import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'left',
    margin: '0 1.5rem',
    marginTop: '1rem',
  },

  titleContainer: {
    padding: '0.5rem',
    paddingBottom: '2rem',
  },

  titleText: {
    color: theme.palette.text.primary,
  },

  divider: {
    color: theme.palette.text.secondary,
    fontWeight: '400',
  },

  filterContainer: {
    padding: '0.5rem',
    marginBottom: '0.75rem',
  },

  filterText: {
    fontWeight: 300,
  },

  filterIcon: {
    fontSize: '2rem',
  },
}));

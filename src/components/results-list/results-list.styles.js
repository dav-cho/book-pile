import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  gridStyles: {
    justifyContent: 'center',
    padding: theme.spacing(1.25),
  },

  loadMore: {
    width: '100%',
    marginBottom: '0.25rem',
    padding: '0.75rem 0 0.5rem 0',
  },
}));

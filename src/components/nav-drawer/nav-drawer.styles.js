import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    marginTop: '0.75rem',
    paddingLeft: '1rem',
    borderTop: '0.5rem solid',
    borderTopColor: theme.palette.divider,

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-evenly',
    },
  },

  menuOption: {
    margin: '0.25rem 1rem 0 1rem',
    marginTop: '0.25rem',
  },
}));

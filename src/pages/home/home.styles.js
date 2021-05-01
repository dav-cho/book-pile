import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  homeContainer: {
    marginTop: '15%',
  },

  title: {
    marginBottom: '2.5rem',

    [theme.breakpoints.up('lg')]: {
      fontSize: '10vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '8rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '21vw',
    },
  },
}));

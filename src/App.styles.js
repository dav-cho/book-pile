import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  App: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundColor: theme.palette.background.default,
  },
}));

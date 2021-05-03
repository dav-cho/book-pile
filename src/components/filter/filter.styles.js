import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  filterContainer: {
    display: 'flex',
    padding: '0.5rem',
    marginBottom: '0.75rem',
  },

  filterText: {
    fontWeight: 300,
  },

  filterIcon: {
    fontSize: '2rem',
  },

  optionsContainer: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.primary,
  },

  option: {
    margin: '0 1rem',
  },
}));

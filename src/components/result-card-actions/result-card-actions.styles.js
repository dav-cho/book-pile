import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  collapseButton: {
    width: '100%',
  },

  collapseContainer: {
    width: '100%',
    margin: 0,

    '& .MuiCollapse-wrapperInner': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },

  infoButton: {
    color: theme.palette.text.primary,
  },

  rating: {
    display: 'flex',
    alignItems: 'center',
  },

  rateCount: {
    marginLeft: '0.5rem',
  },

  star: {
    color: '#fcba03',
    backgroundColor: 'yellow',
    fill: '#fcba03',
  },
}));

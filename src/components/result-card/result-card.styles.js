import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '0.75rem',
    transition: '0.2s',

    '&:hover': {
      transform: 'scale(1.02)',
    },
  },

  image: {
    height: '12.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  brokenImage: {
    fontSize: '7rem',
    opacity: '0.6',
  },

  content: {
    padding: '1rem 0 0.2rem 0',
  },

  cardActions: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

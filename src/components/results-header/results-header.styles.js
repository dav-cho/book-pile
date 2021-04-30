import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'left',
    margin: '0 1.5rem',
    marginTop: '2rem',
    // display: 'flex',
    // justifyContent: 'flex-start',
    // flexWrap: 'wrap',
    // marginBottom: '1.5rem',
  },

  title: {
    // textAlign: 'left',
    // margin: '0 1.5rem',
    padding: '0.5rem',
    paddingBottom: '2.5rem',
    borderBottom: '0.2rem solid #546e7a',
  },

  filterContainer: {
    padding: '0.5rem',
    marginBottom: '0.75rem',
  },

  filter: {
    // fontSize: '0.5rem',
    fontWeight: 300,
  },
}));

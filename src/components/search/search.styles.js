import { withStyles, TextField } from '@material-ui/core';

export const StyledSearchInput = withStyles({
  root: {
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    // '& .MuiOutlinedInput-root': {
    //   '& fieldset': {
    //     borderColor: 'red',
    //   },
    //   '&:hover fieldset': {
    //     borderColor: 'yellow',
    //   },
    //   '&.Mui-focused fieldset': {
    //     borderColor: 'green',
    //   },
    // },
  },

  input: {
    borderRadius: '1rem',
  },
})(TextField);

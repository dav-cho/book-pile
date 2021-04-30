import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  inputContainer: {
    //
  },

  input: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'red',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
}));

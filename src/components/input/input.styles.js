import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  inputDefault: {
    '& .MuiFormLabel-root': {
      padding: '0 0.4rem',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.text.secondary,
        borderRadius: '2rem',
        borderWidth: '0.15rem',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.text.secondary,
        borderWidth: '0.175rem',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.text.secondary,
        borderWidth: '0.175rem',
      },
    },
  },

  inputHome: {
    '& .MuiFormLabel-root': {
      fontSize: '2rem',
      padding: '0 2rem',
      paddingBottom: '1rem',
    },

    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(0.5rem, -1rem) scale(0.65)',
    },

    '& .MuiOutlinedInput-root': {
      fontSize: '2rem',
      padding: '0 1rem',
      width: '30rem',

      '& fieldset': {
        borderColor: theme.palette.text.secondary,
        borderRadius: '2rem',
        borderWidth: '0.15rem',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.text.secondary,
        borderWidth: '0.25rem',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.text.secondary,
        borderWidth: '0.25rem',
      },
    },
  },
}));

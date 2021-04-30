import { TextField } from '@material-ui/core';

import { useStyles } from './input.styles';

export const Input = ({ label, value, handleChange }) => {
  const { input, inputContainer } = useStyles();

  return (
    <div className={inputContainer}>
      <TextField
        variant="outlined"
        margin="dense"
        id="custom-styled-input"
        label={label}
        value={value}
        onChange={handleChange}
        className={input}
      />
    </div>
  );
};

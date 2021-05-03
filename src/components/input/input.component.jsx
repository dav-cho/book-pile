import { TextField } from '@material-ui/core';

import { useStyles } from './input.styles';

export const Input = ({ label, value, handleChange, isHomePage }) => {
  const { inputDefault, inputHome } = useStyles();

  return (
    <TextField
      variant="outlined"
      margin="dense"
      id="custom-styled-input"
      label={label}
      value={value}
      onChange={handleChange}
      className={isHomePage ? inputHome : inputDefault}
    />
  );
};

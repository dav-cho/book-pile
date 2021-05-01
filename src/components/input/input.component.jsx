import { TextField } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

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
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
    </div>
  );
};

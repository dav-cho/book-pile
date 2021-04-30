import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { TextField } from '@material-ui/core';

import { StyledSearchInput } from './search.styles';
// import './search.styles.scss';

export const Search = ({ isMainPage, label }) => {
  const [input, setInput] = useState('');
  const searchHistory = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    searchHistory.push(`/search/${input}`);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      {/* <input
        placeholder="search for a book"
        value={input}
        onChange={e => setInput(e.target.value)
        className={isMainPage ? 'main-page-input' : 'nav-input'}
      /> */}
      {/* <TextField
        id="outlined-basic"
        label="search"
        variant="outlined"
        size="small"
        margin="dense"
        color="secondary"
      /> */}
      <StyledSearchInput
        // className={classes.margin}
        label="search..."
        variant="outlined"
        id="styled-search-input"
        margin="dense"
        // color="primary"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      {/* <label
        className={isMainPage ? 'main-page-input-label' : 'nav-input-label'}
      >
        {label}
      </label> */}
    </form>
  );
};

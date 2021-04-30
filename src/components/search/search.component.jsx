import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './search.styles.scss';

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
      <input
        placeholder="search for a book"
        value={input}
        onChange={e => setInput(e.target.value)}
        className={isMainPage ? 'main-page-input' : 'nav-input'}
      />
      <label
        className={isMainPage ? 'main-page-input-label' : 'nav-input-label'}
      >
        {label}
      </label>
    </form>
  );
};

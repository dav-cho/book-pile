import { useState, useEffect } from 'react';

import { useSearchContext } from '../../contexts/search.context';
import { fetchGoogle } from '../../utils/fetch-data.utils';

import './search.styles.scss';

export const Search = ({ isMainPage, label }) => {
  const [input, setInput] = useState('');
  const { searchVal, setSearchVal, setSearchResults } = useSearchContext();

  useEffect(() => {
    fetchGoogle(searchVal).then(data => setSearchResults(data));
  }, [searchVal, setSearchResults]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchVal(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        // placeholder="search for a book"
        value={input}
        onChange={e => setInput(e.target.value)}
        className={isMainPage ? 'main-page-input' : 'nav-input'}
      />
      <label className={isMainPage ? 'main-page-input-label' : 'nav-input-label'}>
        {label}
      </label>
    </form>
  );
};

import { useState, useEffect } from 'react';
import './home.styles.scss';

import { Button } from '@material-ui/core';

import { useSearchContext } from '../../contexts/search.context';
import { fetchGoogle } from '../../utils/fetch-data';
import { ResultsHeader } from '../../components/results-header/results-header.component';
import { ResultsList } from '../../components/results-list/results-list.component';

export const Home = () => {
  const [input, setInput] = useState('');
  const {
    searchVal,
    setSearchVal,
    searchResults,
    setSearchResults,
  } = useSearchContext();

  useEffect(() => {
    (async () => {
      const googleResults = await fetchGoogle(searchVal);
      setSearchResults(googleResults);
      console.log('~ googleResults', googleResults);
    })();
  }, [searchVal, setSearchResults]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchVal(input);
    setInput('');
  };

  return (
    <>
      <div className="material-testing">
        <Button>hello world</Button>
      </div>

      <p>home/landing page</p>

      <form onSubmit={handleSubmit} className="search">
        <input
          placeholder="search for a book"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </form>

      <ResultsHeader />

      {searchResults ? (
        <div className="results-container">
          <ResultsList results={searchResults} className="results-container" />
        </div>
      ) : (
        <h3>no results found...</h3>
      )}
    </>
  );
};

import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  return (
    <SearchContext.Provider value={{searchVal, setSearchVal, searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

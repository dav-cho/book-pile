import { useSearchContext } from '../../contexts/search.context';

import { Search } from '../../components/search/search.component';
import { ResultsHeader } from '../../components/results-header/results-header.component';
import { ResultsList } from '../../components/results-list/results-list.component';

import './results.styles.scss';

const Results = () => {
  const { searchResults } = useSearchContext();

  return (
    <>
      <p>results page</p>
      {searchResults && <ResultsHeader />}
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

export default Results;

import './results-header.styles.scss';

import { useSearchContext } from '../../contexts/search.context';

export const ResultsHeader = () => {
  const { searchVal } = useSearchContext();

  return (
    <div className="results-header-container">
      <div className="results-header-title">
        <span>results for {searchVal}</span>
      </div>
      <div className="filter-container">
        <span className='filter-button'>filter+</span>
      </div>
    </div>
  );
};

import { useParams } from 'react-router-dom';

import './results-header.styles.scss';

export const ResultsHeader = () => {
  const { searchVal } = useParams();

  return (
    <div className="results-header-container">
      <div className="results-header-title">
        <span>results for {searchVal}</span>
      </div>
      <div className="filter-container">
        <span className="filter-button">filter+</span>
      </div>
    </div>
  );
};

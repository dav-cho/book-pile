import './results-list.styles.scss';

import { ResultCard } from '../result-card/result-card.component';

export const ResultsList = ({ results }) =>
  results.map(result => (
      <ResultCard result={result.volumeInfo} key={result.id} />
  ));

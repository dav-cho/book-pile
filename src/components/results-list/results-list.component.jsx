import { ResultCard } from '../result-card/result-card.component';

import './results-list.styles.scss';

export const ResultsList = ({ results }) =>
  results.map(result => (
      <ResultCard result={result.volumeInfo} key={result.id} />
  ));

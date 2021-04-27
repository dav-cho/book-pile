import './result-card.styles.scss';

export const ResultCard = ({result}) => (
  <div className="result-card">
    <img src={result.imageLinks.thumbnail} alt="book cover" />
    <h3>{result.title}</h3>
    <h4>{result.authors}</h4>
    <p>Page Count: {result.pageCount}</p>
  </div>
);

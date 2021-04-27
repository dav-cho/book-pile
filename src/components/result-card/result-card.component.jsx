import './result-card.styles.scss';

export const ResultCard = ({ result }) => (
  <div className="result-card">
    <div className="image-container">
      <img src={result.imageLinks.thumbnail} alt="book cover" />
    </div>

    <div className="result-details">
      <h3 className='title'>{result.title}</h3>
      <h4 className='author'>{result.authors}</h4>
    </div>
    <div className="tags-container">
      <span className='tag'>Pages: {result.pageCount}</span>
      <span className='tag'>{result.publishedDate}</span>
    </div>
  </div>
);

import { Card, CardContent } from '@material-ui/core';

// import { useStyles } from './result-card.styles';

export const ResultCard = ({ result }) => {
  return (
    <Card className="result-card">
      <img src={result.imageLinks.thumbnail} alt="book cover" />

      <CardContent>
        <h3 className="title">{result.title}</h3>
        <h4 className="author">{result.authors}</h4>
      </CardContent>
      <div className="tags-container">
        <span className="tag">Pages: {result.pageCount}</span>
        <span className="tag">{result.publishedDate}</span>
      </div>
    </Card>
  );
};

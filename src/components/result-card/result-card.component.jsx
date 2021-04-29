import { Card, CardContent } from '@material-ui/core';

import { useStyles } from './result-card.styles';

export const ResultCard = ({ result }) => {
  const { imageLinks, title, authors, pageCount, publishedDate } = result;

  const { noThumbnail } = useStyles();

  return (
    <Card className="result-card">
      {imageLinks ? (
        <img src={imageLinks.thumbnail} alt="book cover" />
      ) : (
        <div className={noThumbnail}>
          <p>no preview available...</p>
          <p>{title}</p>
        </div>
      )}

      <CardContent>
        <h3 className="title">{title}</h3>
        <h4 className="author">{authors}</h4>
      </CardContent>
      <div className="tags-container">
        <span className="tag">Pages: {pageCount}</span>
        <span className="tag">{publishedDate}</span>
      </div>
    </Card>
  );
};

import { Card, CardMedia, CardActions, Typography } from '@material-ui/core';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

import { ResultCardActions } from '../result-card-actions/result-card-actions.component';

import { useStyles } from './result-card.styles';

export const ResultCard = ({ result }) => {
  const { imageLinks, title, authors } = result;

  const classes = useStyles();

  return (
    <>
      <Card className={classes.card} elevation={4}>
        <div>
          {imageLinks ? (
            <CardMedia className={classes.image}>
              <img src={imageLinks.thumbnail} alt="book cover" />
            </CardMedia>
          ) : (
            <CardMedia className={classes.image}>
              <BrokenImageIcon className={classes.brokenImage} />
              <p>no preview available...</p>
            </CardMedia>
          )}
          <div className={classes.content}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="subtitle1">{authors}</Typography>
          </div>
        </div>

        <CardActions className={classes.cardActions}>
          <ResultCardActions result={result} />
        </CardActions>
      </Card>
    </>
  );
};

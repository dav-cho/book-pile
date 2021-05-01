import { useState } from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import BookmarkIcon from '@material-ui/icons/Bookmark';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { ResultCardDetails } from './../result-card-detail/result-card-detail.component';
// import { ResultCollapse } from '../result-collapse/result-collapse.component';

import { useStyles } from './result-card.styles';

export const ResultCard = ({ result }) => {
  const [anchorElement, setAnchorElement] = useState(null);

  const {
    imageLinks,
    title,
    authors,
    description,
    pageCount,
    publishedDate,
  } = result;

  const handleClick = e => {
    setAnchorElement(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  // const [collapse, setCollapse] = useState(false);

  // const handleClick = () => {
  //   setCollapse(!collapse);
  // };

  const { expandButton } = useStyles();

  return (
    <>
      <Card>
        {imageLinks ? (
          <CardMedia>
            <img src={imageLinks.thumbnail} alt="book cover" />
          </CardMedia>
        ) : (
          <CardMedia>
            <p>no preview available...</p>
            <p>{title}</p>
          </CardMedia>
        )}

        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1">{authors}</Typography>
        </CardContent>

        <CardActions>
          <Button className={expandButton} onClick={handleClick}>
            <ExpandMoreIcon />
          </Button>
        </CardActions>
      </Card>

      <ResultCardDetails
        publishedDate={publishedDate}
        pageCount={pageCount}
        description={description}
        anchorElement={anchorElement}
        handleClose={handleClose}
      />
      {/* <ResultCollapse collapse={collapse} description={description} /> */}
    </>
  );
};

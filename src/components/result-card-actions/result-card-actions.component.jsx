import { useState } from 'react';

import { Button, IconButton, Collapse } from '@material-ui/core';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Rating } from '@material-ui/lab/';

import { ResultCardDetails } from './../result-card-detail/result-card-detail.component';

import { useStyles } from './result-card-actions.styles';

export const ResultCardActions = ({ result }) => {
  const { averageRating, ratingsCount } = result;
  const [collapse, setCollapse] = useState(false);
  const [anchorElement, setAnchorElement] = useState(null);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  const handleInfoClick = e => {
    setAnchorElement(e.currentTarget);
  };

  const handleInfoClose = () => {
    setAnchorElement(null);
  };

  const classes = useStyles();

  return (
    <>
      <Button className={classes.collapseButton}>
        {!collapse ? (
          <ExpandMoreRoundedIcon onClick={toggleCollapse} />
        ) : (
          <ExpandLessRoundedIcon onClick={toggleCollapse} />
        )}
      </Button>
      <Collapse className={classes.collapseContainer} in={collapse}>
        <div className={classes.rating}>
          <Rating value={averageRating} precison={0.5} readOnly />
          <span className={classes.rateCount}>({ratingsCount})</span>
        </div>
        <div>
          <IconButton className={classes.infoButton} onClick={handleInfoClick}>
            <InfoOutlinedIcon />
          </IconButton>
        </div>
      </Collapse>
      <ResultCardDetails
        anchorElement={anchorElement}
        handleClose={handleInfoClose}
        {...result}
      />
    </>
  );
};

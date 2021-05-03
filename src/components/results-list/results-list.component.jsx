import { useState } from 'react';

import { Grid, Button } from '@material-ui/core';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

import { ResultCard } from '../result-card/result-card.component';

import { useStyles } from './results-list.styles';

export const ResultsList = ({ results }) => {
  const [endIndex, setEndIndex] = useState(12);
  const currentList = results.slice(0, endIndex);

  const handleClick = () => {
    setEndIndex(prev => prev + 12);
  };

  const { gridStyles, loadMore } = useStyles();

  return (
    <>
      {currentList.map(result => (
        <Grid
          item
          className={gridStyles}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          key={result.etag}
        >
          <ResultCard result={result.volumeInfo} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button className={loadMore}>
          <ExpandMoreRoundedIcon onClick={handleClick} fontSize="large" />
        </Button>
      </Grid>
    </>
  );
};

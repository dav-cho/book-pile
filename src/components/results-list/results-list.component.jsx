import { Grid } from '@material-ui/core';
import { useStyles } from './results-list.styles';

import { ResultCard } from '../result-card/result-card.component';

export const ResultsList = ({ results }) => {
  const { gridStyles } = useStyles();

  return (
    <Grid container>
      {results.map(result => (
        <Grid
          className={gridStyles}
          item
          xs={6}
          sm={4}
          lg={3}
          xl={2}
          key={result.id}
        >
          <ResultCard result={result.volumeInfo} />
        </Grid>
      ))}
    </Grid>
  );
};

import { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import { fetchGoogle } from '../../utils/fetch-data.utils';
import { ResultsHeader } from '../../components/results-header/results-header.component';
import { ResultsList } from '../../components/results-list/results-list.component';
import { ProgressIndicator } from '../../components/progress-indicator/progress-indicator.component';

import { useStyles } from './results.styles';

const Results = ({ match }) => {
  const [searchResults, setSearchResults] = useState({
    data: [],
    loading: false,
  });
  const { searchVal } = match.params;

  const { resultsContainer } = useStyles();

  useEffect(() => {
    if (searchVal) {
      setSearchResults({ loading: true });

      fetchGoogle(searchVal).then(data =>
        setSearchResults({ data: data, loading: false })
      );
    }
  }, [searchVal, setSearchResults]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <ResultsHeader />
      </Grid>
      <Grid item container xs={12} className={resultsContainer}>
        {!searchResults.loading ? (
          <ResultsList
            results={searchResults.data}
            className="results-container"
          />
        ) : (
          <ProgressIndicator />
        )}
      </Grid>
    </Grid>
  );
};

export default Results;

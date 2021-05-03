import { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import { fetchGoogleQuery } from '../../utils/fetch-data.utils';
import { ResultsHeader } from '../../components/results-header/results-header.component';
import { ResultsList } from '../../components/results-list/results-list.component';
import { ProgressIndicator } from '../../components/progress-indicator/progress-indicator.component';

import { useStyles } from './results.styles';

const Results = ({ match }) => {
  const { query } = match.params;
  const [searchResults, setSearchResults] = useState({
    data: [],
    loading: false,
  });

  useEffect(() => {
    if (query) {
      setSearchResults({ loading: true });

      fetchGoogleQuery(query, 0).then(data => {
        setSearchResults({ data: data, loading: false });
      });
    }
  }, [query, setSearchResults]);

  const { resultsContainer } = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <ResultsHeader />
      </Grid>
      <Grid item container xs={12} className={resultsContainer}>
        {searchResults.loading ? (
          <ProgressIndicator />
        ) : (
          <ResultsList
            results={searchResults.data}
            className="results-container"
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Results;

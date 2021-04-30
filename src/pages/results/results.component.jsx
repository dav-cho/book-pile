import { useState, useEffect } from 'react';

import { Grid, CircularProgress } from '@material-ui/core';
// import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchGoogle } from '../../utils/fetch-data.utils';
import { ResultsHeader } from '../../components/results-header/results-header.component';
import { ResultsList } from '../../components/results-list/results-list.component';

const Results = ({ match }) => {
  const [searchResults, setSearchResults] = useState();
  const { searchVal } = match.params;

  useEffect(() => {
    if (searchVal) {
      fetchGoogle(searchVal).then(data => setSearchResults(data));
    }
  }, [searchVal, setSearchResults]);

  return (
    <>
      <p>results page</p>
      <Grid container>
        <Grid item xs={12}>
          {searchResults && <ResultsHeader />}
        </Grid>
        <Grid item container xs={12}>
          {searchResults ? (
            <div className="results-container">
              <ResultsList
                results={searchResults}
                className="results-container"
              />
            </div>
          ) : (
            // <h3>no results found...</h3>
            <CircularProgress />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Results;

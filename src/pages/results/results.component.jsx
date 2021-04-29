import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import { fetchGoogle } from '../../utils/fetch-data.utils';
import { ResultsHeader } from '../../components/results-header/results-header.component';
import { ResultsList } from '../../components/results-list/results-list.component';

const Results = () => {
  const [searchResults, setSearchResults] = useState();
  const { searchVal } = useParams();

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
            <h3>no results found...</h3>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Results;

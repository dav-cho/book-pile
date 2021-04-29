import { Grid } from '@material-ui/core';

import { useSearchContext } from '../../contexts/search.context';
import { ResultsHeader } from '../../components/results-header/results-header.component';
import { ResultsList } from '../../components/results-list/results-list.component';

import './results.styles.scss';

const Results = () => {
  const { searchResults } = useSearchContext();

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

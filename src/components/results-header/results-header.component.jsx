import { useParams } from 'react-router-dom';
// import { Box, Typography } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

// import './results-header.styles.scss';
import { useStyles } from './results-header.styles';

export const ResultsHeader = () => {
  const { searchVal } = useParams();
  const { container, title, filterContainer, filter } = useStyles();

  return (
    <div className={container}>
      <div className={title}>
        <Typography variant="h2">results for {searchVal}</Typography>
      </div>
      <div className={filterContainer}>
        <Button>
          <Typography variant="h3" className={filter}>
            filter
          </Typography>
          <AddIcon fontSize="large" />
        </Button>
      </div>
    </div>
  );
};

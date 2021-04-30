import { useParams } from 'react-router-dom';
import { Typography, Button, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { useStyles } from './results-header.styles';

export const ResultsHeader = () => {
  const { searchVal } = useParams();

  const {
    container,
    titleContainer,
    titleText,
    divider,
    filterContainer,
    filterText,
    filterIcon,
  } = useStyles();

  return (
    <div className={container}>
      <div className={titleContainer}>
        <Typography className={titleText} variant="h2">
          results for {searchVal}
        </Typography>
      </div>
      <Divider className={divider} variant="middle" />
      <div className={filterContainer}>
        <Button>
          <Typography className={filterText} variant="h3">
            filter
          </Typography>
          <AddIcon className={filterIcon} />
        </Button>
      </div>
    </div>
  );
};

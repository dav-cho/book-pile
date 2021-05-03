import { useParams } from 'react-router-dom';
import { Typography, Divider } from '@material-ui/core';

import { Filter } from '../filter/filter.component';

import { useStyles } from './results-header.styles';

export const ResultsHeader = () => {
  const { searchVal } = useParams();

  const { container, titleContainer, titleText, divider } = useStyles();

  return (
    <div className={container}>
      <div className={titleContainer}>
        <Typography className={titleText} variant="h2">
          results for {searchVal}
        </Typography>
      </div>
      <Divider className={divider} />
      <Filter />
    </div>
  );
};

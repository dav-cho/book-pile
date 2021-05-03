import { CircularProgress } from '@material-ui/core';

import { useStyles } from './progress-indicator.styles';

export const ProgressIndicator = () => {
  const { progressContainer } = useStyles();

  return (
    <div className={progressContainer}>
      <CircularProgress size={'5rem'} thickness={2.8} />
    </div>
  );
};

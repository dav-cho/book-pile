import { Menu, Container, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './result-card-detail.styles';

export const ResultCardDetails = ({
  publishedDate,
  pageCount,
  description,
  anchorElement,
  handleClose,
}) => {
  const { detailsContainer, detailsTop, closeButton } = useStyles();

  return (
    <Menu
      anchorEl={anchorElement}
      open={Boolean(anchorElement)}
      onClose={handleClose}
    >
      <Container className={detailsContainer} onClick={handleClose}>
        <div className={detailsTop}>
          <Typography>Published: {publishedDate}</Typography>
          <IconButton className={closeButton}>
            <CloseIcon />
          </IconButton>
        </div>
        <Typography paragraph>Page Count: {pageCount}</Typography>
        <Typography variant="subtitle1">Description:</Typography>
        <Typography paragraph>{description}</Typography>
      </Container>
    </Menu>
  );
};

import { Container, Typography } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';

import { Search } from '../../components/search/search.component';
import { useStyles } from './home.styles';

const Home = () => {
  const { homeContainer } = useStyles();

  return (
    <Container className={homeContainer}>
      <Typography variant="h1" color="textSecondary">
        book.pile
      </Typography>
      <Search isMainPage />
    </Container>
  );
};

export default Home;

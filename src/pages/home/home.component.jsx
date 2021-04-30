import { Container, Typography } from '@material-ui/core';

import { Search } from '../../components/search/search.component';
import { useStyles } from './home.styles';

const Home = () => {
  const { homeContainer, title } = useStyles();

  return (
    <Container className={homeContainer}>
      <Typography variant="h1" color="textSecondary" className={title}>
        book.pile
      </Typography>
      <Search isMainPage />
    </Container>
  );
};

export default Home;

import Typography from '@material-ui/core/Typography';

import { Search } from '../../components/search/search.component';

import './home.styles.scss';

const Home = () => (
  <div className="Home">
    <Typography variant="h1">book.pile</Typography>
    <Search isMainPage />
  </div>
);

export default Home;

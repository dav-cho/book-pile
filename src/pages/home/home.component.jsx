import Typography from '@material-ui/core/Typography';

import { useSearchContext } from '../../contexts/search.context';
import Results from '../results/results.component';
import { Search } from '../../components/search/search.component';

import './home.styles.scss';

const Home = () => {
  const { searchResults } = useSearchContext();

  return !searchResults ? (
    <div className="Home">
      <Typography variant="h1">book.pile</Typography>
      <Search isMainPage />
    </div>
  ) : (
    <Results />
  );
};

export default Home;

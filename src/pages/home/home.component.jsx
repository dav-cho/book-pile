import { Redirect } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import { useSearchContext } from '../../contexts/search.context';
import { Search } from '../../components/search/search.component';

import './home.styles.scss';

const Home = () => {
  const { searchVal, searchResults } = useSearchContext();

  return !searchResults ? (
    <div className="Home">
      <Typography variant="h1">book.pile</Typography>
      <Search isMainPage />
    </div>
  ) : (
    <Redirect push to={`/search/${searchVal}`} />
  );
};

export default Home;

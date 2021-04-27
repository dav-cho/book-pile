import { useSearchContext } from '../../contexts/search.context';

import Results from '../results/results.component';
import { Search } from '../../components/search/search.component';

import './home.styles.scss';

const Home = () => {
  const { searchResults } = useSearchContext();

  return !searchResults ? (
    <div className="Home">
      <h1 className="title">book.pile</h1>
      <Search isMainPage />
    </div>
  ) : (
    <Results />
  );
};

export default Home;

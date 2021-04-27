import { Route } from 'react-router-dom';

import { SearchProvider } from './contexts/search.context';
import { Header } from './components/header/header.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Results from './pages/results/results.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Results} />
      </SearchProvider>
    </div>
  );
}

export default App;

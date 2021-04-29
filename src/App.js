import { Route } from 'react-router-dom';

import { ThemeContextProvider } from './contexts/theme.context';
import { SearchContextProvider } from './contexts/search.context';
import { Header } from './components/header/header.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Results from './pages/results/results.component';

import './App.scss';

function App() {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <div className="App">
          <Header />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/search/:searchTerm" component={Results} />
          </div>
        </div>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
}

export default App;

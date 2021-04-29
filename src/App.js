import { Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

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
          <Grid container direction="column">
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/search" component={Results} />
            </Grid>
          </Grid>
        </div>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
}

export default App;

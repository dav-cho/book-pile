import { Route } from 'react-router-dom';

import { ThemesContextProvider } from './contexts/themes.context';
import { Header } from './components/header/header.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Results from './pages/results/results.component';

import './App.scss';

function App() {
  return (
    <ThemesContextProvider>
      <div className="App">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/search/:searchVal" component={Results} />
        </div>
      </div>
    </ThemesContextProvider>
  );
}

export default App;

import { Route } from 'react-router-dom';

import { Header } from './components/header/header.component';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import Results from './pages/results/results.component';

import { useStyles } from './App.styles';

function App() {
  const { App } = useStyles();

  return (
    <div className={App}>
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/search/:searchVal" component={Results} />
      </div>
    </div>
  );
}

export default App;

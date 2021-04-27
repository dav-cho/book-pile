import { Route } from 'react-router-dom';
import './App.scss';

import { SearchProvider } from './contexts/search.context';
import { Header } from './components/header/header.component';
import { Home } from './pages/home/home.component';
import { About } from './pages/about/about.component';

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </SearchProvider>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemesContextProvider } from './contexts/themes.context';
import App from './App';

import './index.css';

ReactDOM.render(
  <ThemesContextProvider>
    <Router>
      <App />
    </Router>
  </ThemesContextProvider>,
  document.getElementById('root')
);

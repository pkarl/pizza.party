import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Links from './components/Links';
import Home from './components/Home';
import News from './components/News';
import About from './components/About';
import Random from './components/Random';
import Work from './components/Work';

import './App.css';

const App = () => (
  <Router>
    <div className="content-container">
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/random" component={Random} />
      <Route path="/news" component={News} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
    </div>
  </Router>
);

export default App;

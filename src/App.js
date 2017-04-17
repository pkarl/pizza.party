import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink to={{pathname: '/about'}}>about</NavLink>
    <NavLink replace to="/contatct">contact</NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route path="/" exact render={() => <h1>Home</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
    </div>
  </Router>
);

export default App;

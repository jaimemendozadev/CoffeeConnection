import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';

import Employees from './components/Employees';
import Home from './components/Home';
import Public from './components/Public';
import User from './components/User';

const FourOhFour = () => <h1>Uh Oh! 404 Page Not Found. Something happens!</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/employees" component={Employees} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/public" component={Public} />
        <Route exact path="/user" component={User} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));

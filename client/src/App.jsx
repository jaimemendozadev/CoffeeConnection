import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import {ApolloClient} from 'apollo-client';
import {ApolloProvier} from 'react-apollo';

const client = new ApolloClient();


const FourOhFour = () => <h1>Uh Oh! 404 Page Not Found. Something happens!</h1>;

const App = () => (
  <ApolloProvier client={client}>
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  </ApolloProvier>
);

render(<App />, document.getElementById('app'));

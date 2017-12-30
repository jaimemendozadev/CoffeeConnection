import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './Landing';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3050' }),
  cache: new InMemoryCache()
});


const FourOhFour = () => <h1>Uh Oh! 404 Page Not Found. Something happens!</h1>;

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

render(<App />, document.getElementById('app'));

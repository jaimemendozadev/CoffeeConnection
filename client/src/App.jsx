import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';



const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3050/graphql' }),
  cache: new InMemoryCache()
});


import Employees from './components/Employees';
import Home from './components/Home';
import Public from './components/Public';
import User from './components/User';
import DrinkList from './components/DrinkList';

const FourOhFour = () => <h1>Uh Oh! 404 Page Not Found. Something happens!</h1>;

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/employees" component={Employees} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/public" component={Public} />
          <Route exact path="/user" component={User} />
          <Route exact path='/drinklist' component={DrinkList} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  </ApolloProvider>
);

render(<App />, document.getElementById('app'));

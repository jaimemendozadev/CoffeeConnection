import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as queries from '../graphql/queries';

const {getAllDrinks} = queries;

class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDrink: null
    };
  }

  render() {
    const { data: { refetch, loading, error } } = this.props;
    if (loading) {
      return (<h1>Loading…</h1>);
    }
    return (
      <h1>DrinkList</h1>      
    );
  }
}

export default graphql(getAllDrinks)(DrinkList);
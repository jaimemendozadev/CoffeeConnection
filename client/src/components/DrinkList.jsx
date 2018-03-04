import React from 'react'
import { graphql } from 'react-apollo'
import * as queries from '../graphql/queries'

const {getCurrentEmployee} = queries

const DrinkList = () => (
  <h1>DrinkList</h1>
)

export default graphql(getCurrentEmployee)(DrinkList)

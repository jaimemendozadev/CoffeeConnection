import React from 'react'
import { graphql } from 'react-apollo'
import * as queries from '../graphql/queries'

const {GetCurrentEmployee} = queries

const DrinkList = (props) => (
  
  <div>
    {console.log("props are ", props)}
    <h1>DrinkList</h1>
  </div>
)

export default graphql(GetCurrentEmployee)(DrinkList)

import React from 'react'
import { graphql } from 'react-apollo'
import * as queries from '../../graphql/queries.js'

const {CreateOrder} = queries

const SelectionPage = (props) => (
  <div>
    <h1>What Drink Would You Like?</h1>
    <button>Coffee</button>
    <button>Tea</button>
  </div>
)

export default graphql(CreateOrder)(SelectionPage)

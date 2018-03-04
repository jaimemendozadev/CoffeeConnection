import React, { Component } from 'react'

class DrinkSelect extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedDrink: null
    }
  }

  render () {
    return (
      <div>
        <h1>Drink Select</h1>
      </div>
    )
  }
}

export default DrinkSelect

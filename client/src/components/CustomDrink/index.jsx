import React, {Component} from 'react'

class CustomDrink extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectionPage: true, // coffee or tea
      toggleSize: false, // size, caffeine, ice/temp
      toggleMilk: false, // milk
      toggleSweet: false, // sweet
      toggleToppings: false, // toppings
      confirmationPage: false
    }
  }

  render () {
    return (
      <div>
        <h1>CustomDrink</h1>
      </div>

    )
  }
}

export default CustomDrink

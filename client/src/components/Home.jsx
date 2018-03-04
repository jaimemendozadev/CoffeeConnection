import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

export default class Home extends Component {
  render () {
    return (
      <div className='text-center'>
        <h1>This is the Home Page</h1>
        <div><Link to='/drink-select'>Select Your Drink</Link></div>
        <div><Link to='/public'>Public View Page</Link></div>
        <div><Link to='/user'>Individual User Page</Link></div>
        <div><Link to='/employees'>View All Employees</Link></div>
        <div><Link to='/drinklist'>View List of All Drinks</Link></div>
        <div><Link to='/custom-drink'>Create a Custom Drink</Link></div>
        <div><Link to='/signup'>Signup</Link></div>
        <div><Link to='/login'>Login</Link></div>
        <div><Link to='/'>Log Out</Link></div>
        <Image circle src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG' />
      </div>
    )
  }
}

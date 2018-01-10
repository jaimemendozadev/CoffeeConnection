import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>This is the Home Page</h1>
        <div><Link to='/public'>Public View Page</Link></div>
        <div><Link to='/user'>Individual User Page</Link></div>
        <div><Link to='/employees'>View All Employees</Link></div>
        <div><Link to='/signup'>Signup</Link></div>
        <div><Link to='/login'>Login</Link></div>

        <div><Link to='/'>Log Out</Link></div>
      </div>
    );
  }
}
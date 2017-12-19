import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class User extends Component {
  render() {
    return (
      <div className ="text-center">
        <h1>This is the User Page</h1>
        <div><Link to='/'>Back To Home</Link></div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>CoffeeConnection</h1>
        <div>
          <Link to='/home'><Button className="btn btn-lg" bsStyle="success">Get Started</Button></Link>
        </div>
        <Image src="https://i.pinimg.com/originals/8c/6c/55/8c6c55cd70c5dc9bac7860b8d89c386c.gif" />
      </div>
    );
  }
}

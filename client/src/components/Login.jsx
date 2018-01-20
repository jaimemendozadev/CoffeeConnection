import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleClickFacebook = this.handleClickFacebook.bind(this);
    this.handleClickGoogle = this.handleClickGoogle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClickFacebook() {}
  handleClickGoogle() {}

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.handleClickFacebook}>Facebook</button>
        <button onClick={this.handleClickGoogle}>Google</button>
        <div>
          <p>New to CoffeeConnection?</p>
          <p>
            Please <div><Link to='/signup'>Sign Up</Link></div>
          </p>
        </div>
      </div>
    );
  }
}
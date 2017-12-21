import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
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
        <h1>Create A New Account</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Company
            <input type="text" name="company" value={this.state.company} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.handleClickFacebook}>Facebook</button>
        <button onClick={this.handleClickGoogle}>Google+</button>
        <div>
          <p>Already have an account?</p>
          <p>
            Please <a href="">LOGIN</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;

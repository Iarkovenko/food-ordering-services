import React, { Component } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    this.handleReset();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign In Form</h2>
        <input
          onChange={this.handleChange}
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
        />
        <button type="submit">SignIn from {email}</button>
      </form>
    );
  }
}

export default SignIn;

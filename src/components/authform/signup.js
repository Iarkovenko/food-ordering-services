import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
  repeatPassword: '',
};
class SignUp extends Component {
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
    this.setState(...INITIAL_STATE);
  };

  render() {
    const { name, email, phone, password, repeatPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign Up Form</h2>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
        />
        <input
          onChange={this.handleChange}
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
        />
        <input
          onChange={this.handleChange}
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          value={phone}
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="repeatPassword"
          placeholder="Repeat passwrod"
          value={repeatPassword}
        />
        <button type="submit">SignUp</button>
      </form>
    );
  }
}

export default SignUp;

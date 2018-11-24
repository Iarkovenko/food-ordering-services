import React, { Component } from 'react';

class Filter extends Component {
  state = {
    inputText: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ inputText: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { inputText } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>enter filter</p>
        <input
          onChange={this.handleChange}
          name="filter"
          placeholder="enter filter"
          value={inputText}
        />
      </form>
    );
  }
}

export default Filter;

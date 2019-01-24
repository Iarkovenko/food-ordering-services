import React, { Component } from 'react';

class Searcher extends Component {
  state = {};

  handleChangeText = ({ target }) => {
    const { name, value } = target;
    const { changeSearchFilter } = this.props;

    this.setState({ [name]: value });
    changeSearchFilter(value);
  };

  render() {
    const { searcherByName } = this.props;
    return (
      <form>
        <input
          type="text"
          name="searcherByName"
          placeholder="Search by name"
          onChange={this.handleChangeText}
          value={searcherByName}
        />
      </form>
    );
  }
}

export default Searcher;

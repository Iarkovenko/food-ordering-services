import React, { Component } from 'react';

class SearcherForm extends Component {
  state = {};

  handleChangeText = ({ target }) => {
    const { value } = target;
    const { changeSearchFilter } = this.props;
    changeSearchFilter(value);
  };

  render() {
    const { options, value, onChange, onSubmit, valueText } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <select value={value} onChange={e => onChange(e.target.value)}>
          {options.map(o => (
            <option key={o.id} value={o.name}>
              {o.name}
            </option>
          ))}
        </select>
        <br />
        <input
          type="text"
          name="searcherByName"
          placeholder="Search by name"
          onChange={this.handleChangeText}
          value={valueText}
        />
        <button type="submit">reset</button>
      </form>
    );
  }
}

export default SearcherForm;

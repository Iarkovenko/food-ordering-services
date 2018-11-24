import React, { Component } from 'react';

class ComentSection extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <ul>
          <li>Comment 1</li>
          <li>Comment 2</li>
          <li>Comment 3</li>
          <li>Comment 4</li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <textarea placeholder="Enter you Comment" />
          <select required>
            <option value="" selected disabled>
              ...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
}

export default ComentSection;

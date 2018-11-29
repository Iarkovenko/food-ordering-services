import React, { Component } from 'react';
import FormToAddComments from './formToAddComment';

class ComentSectionToAdd extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return <FormToAddComments handleSubmit={this.handleSubmit} />;
  }
}

export default ComentSectionToAdd;

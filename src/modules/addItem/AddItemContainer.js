import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as API from '../../services/api';

import AddItemView from './AddItemView';

class AddItem extends Component {
  state = {
    newItem: {
      name: '',
      description: '',
      category: null,
      image: '',
      price: '',
    },
    categories: [],
  };

  componentDidMount() {
    API.getCategories().then(data => this.setState({ categories: data }));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({
      newItem: { ...prevState.newItem, [name]: value },
    }));
  };

  handlePostItem = e => {
    e.preventDefault();
    const { history } = this.props;
    const { newItem } = this.state;

    API.postMenuItem({ ...newItem }).then(res => {
      if (res.status !== 201) return;
      history.replace({
        pathname: '/menu',
      });
    });
  };

  render() {
    const { newItem, categories } = this.state;
    return (
      <AddItemView
        handleChange={this.handleChange}
        handlePostItem={this.handlePostItem}
        options={categories}
        {...newItem}
      />
    );
  }
}

export default withRouter(AddItem);

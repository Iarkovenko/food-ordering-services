import React, { Component } from 'react';
import * as API from '../components/services';
import MenuItem from '../components/MenuItem';

class ItemPage extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: null,
  };

  componentDidMount = () => {
    const { match } = this.props;
    API.getMenuItemById(match.params.id).then(data =>
      this.setState({ ...data }),
    );
  };

  render() {
    const {
      id,
      name,
      description,
      image,
      price,
      category,
      ingredients,
    } = this.state;
    return (
      <MenuItem
        dataOfitem={{
          id,
          name,
          description,
          image,
          price,
          category,
          ingredients,
        }}
      />
    );
  }
}

export default ItemPage;

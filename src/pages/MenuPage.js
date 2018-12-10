import React, { Component } from 'react';
import MenuList from '../components/MenuList';
import SelectedForm from '../components/SelectedForm';
import * as API from '../components/services';

class MenuPage extends Component {
  state = {
    items: [],
    categories: [],
  };

  componentDidMount = () => {
    API.getAllMenuItems().then(data => this.setState({ items: data }));
    API.getCategories().then(data => this.setState({ categories: data }));
  };

  render() {
    const { items, categories } = this.state;
    const { match } = this.props;
    return (
      <>
        <SelectedForm options={categories} />
        <MenuList items={items} match={match} />
      </>
    );
  }
}

export default MenuPage;

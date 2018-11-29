import React, { Component } from 'react';
import MenuItem from './cardMenuItem';
import Filter from './filterInput';
import menuData from '../../data/menu.json';

const filterMenuItems = (filter, menuList) =>
  menuList.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );

class MenuList extends Component {
  state = {
    menuList: [...menuData],
    filter: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  render() {
    const { filter, menuList } = this.state;
    const filteredMenuItems = filterMenuItems(filter, menuList);
    return (
      <div>
        <h1>MENU LIST</h1>
        <Filter value={filter} onChange={this.handleChange} />
        {filter.length === 0 ? (
          <MenuItem dataObj={menuList} imageWidth="250px" imageHeight="250px" />
        ) : (
          <MenuItem dataObj={filteredMenuItems} />
        )}
      </div>
    );
  }
}

export default MenuList;

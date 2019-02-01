import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import MenuList from './menuGridView';
import FilterForm from './FilterFormContainer';
import SelectForm from './SelectFormContainer';

import menuOperation from '../../../redux/menu/menuOperation';
import cartActions from '../../../redux/cart/cartActions';

import { getCategories, menuItemsByFilter } from '../../../redux/selectors';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuPage extends Component {
  state = {
    category: '',
  };

  componentDidMount() {
    const {
      fetchAllMenu,
      fetchAllMenuCategories,
      fetchMenuItemsBySelected,
    } = this.props;

    fetchAllMenuCategories();

    const category = getCategoryFromProps(this.props);
    if (!category) {
      return fetchAllMenu();
    }
    this.setState({ category });
    return fetchMenuItemsBySelected(category);
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.state;
    const prevCategory = prevState.category;

    const { fetchAllMenu, fetchMenuItemsBySelected } = this.props;

    if (prevCategory === category) return;

    if (!category) {
      fetchAllMenu();
    }
    if (category) {
      fetchMenuItemsBySelected(category);
    }
  }

  handleCategoryChange = ({ target }) => {
    const { value } = target;
    this.setState({ category: value });

    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${value}`,
    });
  };

  handleResetCategoty = e => {
    e.preventDefault();
    this.setState({ category: '' });
    const { history, location, resetFilter, fetchAllMenu } = this.props;
    resetFilter();
    fetchAllMenu();
    return history.replace({
      pathname: location.pathname,
    });
  };

  handleChangeText = ({ target }) => {
    const { value } = target;
    const { changeSearchFilter } = this.props;
    changeSearchFilter(value);
  };

  render() {
    const { match, location, items, categories, searchFilterText } = this.props;

    const currentCategory = getCategoryFromProps(this.props);
    return (
      <>
        <SelectForm
          value={currentCategory}
          options={categories}
          onChange={this.handleCategoryChange}
          onSubmit={this.handleResetCategoty}
        />
        <FilterForm
          options={categories}
          handleChangeText={this.handleChangeText}
          value={searchFilterText}
        />
        <MenuList
          items={items}
          match={match}
          location={location}
          {...this.props}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: menuItemsByFilter(state),
  categories: getCategories(state),
  searchFilterText: state.searchFilter,
});

const mapDispatchToProps = {
  fetchAllMenu: menuOperation.fetchAllMenu,
  fetchAllMenuCategories: menuOperation.fetchAllMenuCategories,
  fetchMenuItemsBySelected: menuOperation.fetchMenuItemsBySelected,
  changeSearchFilter: menuOperation.changeSearchFilter,
  addingToCart: cartActions.addToCart,
  resetFilter: menuOperation.resetFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MenuPage));

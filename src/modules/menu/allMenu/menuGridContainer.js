import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import MenuList from './menuGridView';
// import SelectedForm from './selectorFormView';
// import Searcher from './SearcherByName';
import FilterFormContainer from './FilterFormContainer';
import ModalWindow from '../../modalWindow/modalWindowContainer';

import menuOperation from '../../../redux/menuOperation';
import menuActions from '../../../redux/menuActions';
import cartActions from '../../../redux/cartActions';

import { menuItemsByFilter } from '../../../redux/selectors';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuPage extends Component {
  state = {};

  componentDidMount() {
    const {
      fetchMenuItems,
      fetchMenuCategories,
      fetchMenuItemsBySelected,
    } = this.props;

    fetchMenuCategories();

    const category = getCategoryFromProps(this.props);
    if (!category) {
      return fetchMenuItems();
    }
    return fetchMenuItemsBySelected(category);
  }

  componentDidUpdate(prevProps) {
    const { fetchMenuItems, fetchMenuItemsBySelected, filter } = this.props;

    if (prevProps.filter === filter) return;

    if (!filter) {
      fetchMenuItems();
    }
    if (filter) {
      fetchMenuItemsBySelected(filter);
    }
  }

  handleCategoryChange = category => {
    const { history, location, changeFilter } = this.props;
    changeFilter(category);
    history.push({
      pathname: location.match,
      search: `category=${category}`,
    });
  };

  handleResetFilter = e => {
    e.preventDefault();
    const { history, location, resetFilter } = this.props;
    resetFilter();

    return history.replace({
      pathname: location.pathname,
    });
  };

  handleChangeText = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleDeleteItem = id => {
    const { handleDelete } = this.props;
    handleDelete(id);
  };

  handleOpenModal = id => {
    const { switchModalWindow } = this.props;
    this.setState({ id });
    switchModalWindow();
  };

  handleAddToCart = id => {
    const { addingToCart } = this.props;
    addingToCart(id);
  };

  render() {
    const {
      match,
      location,
      items,
      categories,
      isModalOpen,
      changeSearchFilter,
      searchFilterText,
    } = this.props;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <>
        <FilterFormContainer
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
          onSubmit={this.handleResetFilter}
          changeSearchFilter={changeSearchFilter}
          valueText={searchFilterText}
        />
        <MenuList
          items={items}
          match={match}
          location={location}
          handleDelete={this.handleDeleteItem}
          handleEditItem={this.handleOpenModal}
          handleAddToCart={this.handleAddToCart}
        />
        {isModalOpen && <ModalWindow {...this.props} {...this.state} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: menuItemsByFilter(state),
  categories: state.categories,
  isModalOpen: state.isModalOpen,
  filter: state.filter,
  searchFilterText: state.searchFilter,
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperation.fetchMenuItems,
  fetchMenuCategories: menuOperation.fetchMenuCategories,
  changeFilter: menuActions.changeFilter,
  handleDelete: menuOperation.handleDeleteItemById,
  switchModalWindow: menuOperation.toogleModalWindow,
  addingToCart: cartActions.addToCart,
  fetchMenuItemsBySelected: menuOperation.fetchMenuItemsBySelected,
  changeSearchFilter: menuOperation.changeSearchFilter,
  resetFilter: menuOperation.resetFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MenuPage));

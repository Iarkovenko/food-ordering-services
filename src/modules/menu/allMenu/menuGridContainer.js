import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import MenuList from './menuGridView';
import SelectedForm from './selectorFormView';
import ModalWindow from '../../modalWindow/modalWindowContainer';

import menuOperation from '../../../redux/menuOperation';
import actions from '../../../redux/menuActions';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuPage extends Component {
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
    const { history, location, changeFilter } = this.props;
    changeFilter(null);
    return history.replace({
      pathname: location.pathname,
    });
  };

  handleDeleteItem = id => {
    const { handleDelete } = this.props;
    handleDelete(id);
  };

  handleOpenModal = () => {
    const { switchModalWindow } = this.props;
    switchModalWindow();
  };

  render() {
    const { match, location, items, categories, isModalOpen } = this.props;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <>
        <SelectedForm
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
          onSubmit={this.handleResetFilter}
        />
        <MenuList
          items={items}
          match={match}
          location={location}
          handleDelete={this.handleDeleteItem}
          handleEditItem={this.handleOpenModal}
        />
        {isModalOpen && <ModalWindow {...this.props} />}
      </>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
  fetchMenuItems: menuOperation.fetchMenuItems,
  fetchMenuCategories: menuOperation.fetchMenuCategories,
  fetchMenuItemsBySelected: menuOperation.fetchMenuItemsBySelected,
  changeFilter: actions.changeFilter,
  handleDelete: menuOperation.handleDeleteItemById,
  switchModalWindow: menuOperation.fetchDataForModalWindow,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MenuPage));

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import MenuList from './menuGridView';
import SelectedForm from './selectorFormView';

import * as API from '../../../services/api';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuPage extends Component {
  state = {
    items: [],
    categories: [],
  };

  componentDidMount() {
    API.getCategories().then(data => this.setState({ categories: data }));
    API.getAllMenuItems().then(data => this.setState({ items: data }));
    const category = getCategoryFromProps(this.props);
    if (!category) {
      const { history, location } = this.props;
      return history.replace({
        pathname: location.pathname,
        search: 'category=all',
      });
    }
    return this.fetchArticles(category).then(data =>
      this.setState({ items: data }),
    );
  }

  componentDidUpdate(prevProps) {
    const category = getCategoryFromProps(this.props);
    if (!category) {
      const { history, location } = this.props;
      history.replace({
        pathname: location.pathname,
        search: 'category=all',
      });
    }
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);
    if (prevCategory === nextCategory) return;
    this.fetchArticles(nextCategory).then(data =>
      this.setState({ items: data }),
    );
  }

  fetchArticles = category => API.getMenuItemsWithCategory(category);

  handleCategoryChange = category => {
    const { history, location } = this.props;
    history.push({
      pathname: location.match,
      search: `category=${category}`,
    });
  };

  handleResetFilter = e => {
    e.preventDefault();
    const { history, location } = this.props;
    return history.replace({
      pathname: location.pathname,
      search: 'category=all',
    });
  };

  render() {
    const { items, categories } = this.state;
    const { match, location } = this.props;
    const currentCategory = getCategoryFromProps(this.props);

    return (
      <>
        <SelectedForm
          options={categories}
          value={currentCategory}
          onChange={this.handleCategoryChange}
          onSubmit={this.handleResetFilter}
        />
        <MenuList items={items} match={match} location={location} />
      </>
    );
  }
}

export default withRouter(MenuPage);

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import MenuItem from './itemView';
import CommentForm from './commentFormView';

import * as API from '../../../services/api';

class ItemPage extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: null,
    comment: '',
  };

  componentDidMount() {
    const { match } = this.props;
    API.getMenuItemById(match.params.id).then(data =>
      this.setState({ ...data }),
    );
  }

  handlegoBackToList = () => {
    const { history, location } = this.props;
    const { category } = this.state;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push({
      pathname: '/menu',
      search: `?category=${category}`,
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ comment: e.target.value });
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
      comment,
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
        goBackToList={this.handlegoBackToList}
      >
        <CommentForm
          addComment={this.addCommentToItem}
          value={comment}
          comments={[]}
        />
      </MenuItem>
    );
  }
}

export default withRouter(ItemPage);

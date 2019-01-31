import { combineReducers } from 'redux';
import types from './actionTypes';

import cartReducer from './cartReducer';
import entityReducer from './entityReducer';

function menuItemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST_MENU:
      return payload.ids.menuItems;

    default:
      return state;
  }
}

function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST_CATEGORIES:
      return payload.ids.categories;

    default:
      return state;
  }
}

function searchFilterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_SEARCH_FILTER:
      return payload;
    case types.RESET_FILTER:
      return '';
    default:
      return state;
  }
}

// function addToCart(state)

export default combineReducers({
  itemsID: menuItemsReducer,
  categoriesID: categoriesReducer,
  searchFilter: searchFilterReducer,
  cart: cartReducer,
  entities: entityReducer,
});

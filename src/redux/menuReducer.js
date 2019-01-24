import { combineReducers } from 'redux';
import types from './actionTypes';
import cartReducer from './cartReducer';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST_MENU:
      return payload;

    case types.DELETE_ITEM:
      return state.filter(item => item.id !== payload);

    case types.UPDATE_MENU_ITEM:
      return state.map(item => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });

    default:
      return state;
  }
}

function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST_CATEGORIES:
      return payload;

    default:
      return state;
  }
}

function filterReducer(state = null, { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    case types.RESET_FILTER:
      return null;
    default:
      return state;
  }
}

function toogleModalWindow(state = false, { type }) {
  switch (type) {
    case types.OPEN_MODAL_FLAG:
      return !state;

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
  items: itemsReducer,
  categories: categoriesReducer,
  filter: filterReducer,
  searchFilter: searchFilterReducer,
  isModalOpen: toogleModalWindow,
  cart: cartReducer,
});

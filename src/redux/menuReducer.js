import { combineReducers } from 'redux';
import types from './actionTypes';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST_MENU:
      return payload;

    case types.DELETE_ITEM:
      return state.filter(item => item.id !== payload);

    case types.UPDATE_MENU_ITEM:
      return [...state, payload];

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

export default combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  filter: filterReducer,
  isModalOpen: toogleModalWindow,
});

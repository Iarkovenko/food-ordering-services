import { normalize } from 'normalizr';

import types from '../actionTypes';

import * as schemas from '../schemas/schemas';

const fetchRequestStart = () => ({
  type: types.FETCH_REQUEST_START,
});

const fetchRequestSuccess = () => ({
  type: types.FETCH_REQUEST_SUCCESS,
});

const fetchRequestError = () => ({
  type: types.FETCH_REQUEST_ERROR,
});

const fetchAllMenu = menuItems => {
  const normalizedPosts = normalize(menuItems, [schemas.MenuItemsSchema]);

  return {
    type: types.FETCH_REQUEST_MENU,
    payload: {
      ids: {
        menuItems: Object.keys(normalizedPosts.entities.menuItems),
      },
      entities: normalizedPosts.entities,
    },
  };
};

const fetchAllCategories = categories => {
  const normalizedCategories = normalize(categories, [
    schemas.CategoriesMenuItemsSchema,
  ]);

  return {
    type: types.FETCH_REQUEST_CATEGORIES,
    payload: {
      ids: {
        categories: Object.keys(normalizedCategories.entities.categories),
      },
      entities: normalizedCategories.entities,
    },
  };
};

const changeSearchFilter = text => ({
  type: types.CHANGE_SEARCH_FILTER,
  payload: text,
});

const resetFilter = () => ({
  type: types.RESET_FILTER,
});

export default {
  fetchRequestStart,
  fetchRequestSuccess,
  fetchRequestError,
  fetchAllMenu,
  fetchAllCategories,
  changeSearchFilter,
  resetFilter,
};

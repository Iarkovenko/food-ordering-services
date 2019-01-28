import { normalize } from 'normalizr';

import types from './actionTypes';

import * as schemas from './schemas/schemas';

const fetchMenu = items => ({
  type: types.FETCH_REQUEST_MENU,
  payload: items,
});

const fetchCategories = items => ({
  type: types.FETCH_REQUEST_CATEGORIES,
  payload: items,
});

const changeFilter = option => ({
  type: types.CHANGE_FILTER,
  payload: option,
});

const deleteItem = id => ({
  type: types.DELETE_ITEM,
  payload: id,
});

const toogleModalFlag = () => ({
  type: types.OPEN_MODAL_FLAG,
});

const updateItem = item => ({
  type: types.UPDATE_MENU_ITEM,
  payload: item,
});

const changeSearchFilter = text => ({
  type: types.CHANGE_SEARCH_FILTER,
  payload: text,
});

const resetFilter = () => ({
  type: types.RESET_FILTER,
});

const fetchMenuItems = menuItems => {
  const normalizedPosts = normalize(menuItems, [schemas.MenuItemsSchema]);
  console.log(normalizedPosts.entities.menuItems);
  return {
    type: 'FETCH_FOR_ENTITIES_ITEMS',
    payload: {
      ids: {
        menuItems: Object.keys(normalizedPosts.entities.menuItems),
      },
      entities: normalizedPosts.entities,
    },
  };
};

const fetchCategoriesItems = categories => {
  const normalizedCategories = normalize(categories, [
    schemas.CategoriesMenuItemsSchema,
  ]);

  return {
    type: 'FETCH_FOR_ENTITIES_CATEGORIES',
    payload: {
      ids: {
        category: Object.keys(normalizedCategories.entities.categories),
      },
      entities: normalizedCategories.entities,
    },
  };
};

export default {
  fetchMenu,
  fetchMenuItems,
  fetchCategories,
  fetchCategoriesItems,
  changeFilter,
  changeSearchFilter,
  resetFilter,
  deleteItem,
  toogleModalFlag,
  updateItem,
};

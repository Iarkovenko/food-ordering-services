import types from './actionTypes';

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

export default {
  fetchMenu,
  fetchCategories,
  changeFilter,
  changeSearchFilter,
  resetFilter,
  deleteItem,
  toogleModalFlag,
  updateItem,
};

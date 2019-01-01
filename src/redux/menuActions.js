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

export default {
  fetchMenu,
  fetchCategories,
  changeFilter,
  deleteItem,
  toogleModalFlag,
};

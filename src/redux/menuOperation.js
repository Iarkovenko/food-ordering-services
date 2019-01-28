import * as API from '../services/api';
import actions from './menuActions';

const fetchMenuItems = () => (dispatch, getState) => {
  API.getAllMenuItems().then(data => {
    dispatch(actions.fetchMenuItems(data));
    dispatch(actions.fetchMenu(getState().entity.menuItems));
  });
};

const fetchMenuCategories = () => (dispatch, getState) => {
  API.getCategories().then(data => {
    dispatch(actions.fetchCategoriesItems(data));
    dispatch(actions.fetchCategories(getState().entity.categories));
  });
};

const handleDeleteItemById = id => dispatch => {
  API.deleteMenuItem(id).then(res => {
    if (res.status !== 200) return;
    dispatch(actions.deleteItem(id));
  });
};

const toogleModalWindow = () => dispatch => {
  dispatch(actions.toogleModalFlag());
};

const fetchDataForModalWindow = id => () => API.getMenuItemById(id);

const updateDataOfMenuItem = item => dispatch =>
  API.patchMenuItem(item).then(res => {
    dispatch(actions.updateItem(item));
    return res;
  });

const fetchMenuItemsBySelected = category => (dispatch, getState) => {
  API.getMenuItemsWithCategory(category).then(data => {
    dispatch(actions.fetchMenuItems(data));
    dispatch(actions.fetchMenu(getState().entity.menuItems));
  });
};

const changeSearchFilter = text => dispatch => {
  dispatch(actions.changeSearchFilter(text));
};

const resetFilter = () => dispatch => {
  dispatch(actions.resetFilter());
};

export default {
  fetchMenuItems,
  fetchMenuCategories,
  handleDeleteItemById,
  fetchDataForModalWindow,
  toogleModalWindow,
  updateDataOfMenuItem,
  fetchMenuItemsBySelected,
  changeSearchFilter,
  resetFilter,
};

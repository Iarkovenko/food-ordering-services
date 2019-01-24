import * as API from '../services/api';
import actions from './menuActions';

const fetchMenuItems = () => dispatch => {
  API.getAllMenuItems().then(data => dispatch(actions.fetchMenu(data)));
};

const fetchMenuCategories = () => dispatch => {
  API.getCategories().then(data => dispatch(actions.fetchCategories(data)));
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

const fetchMenuItemsBySelected = category => dispatch => {
  API.getMenuItemsWithCategory(category).then(data =>
    dispatch(actions.fetchMenu(data)),
  );
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

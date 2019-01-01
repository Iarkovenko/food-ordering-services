import * as API from '../services/api';
import actions from './menuActions';

const fetchMenuItems = () => dispatch => {
  API.getAllMenuItems().then(data => dispatch(actions.fetchMenu(data)));
};

const fetchMenuCategories = () => dispatch => {
  API.getCategories().then(data => dispatch(actions.fetchCategories(data)));
};

const fetchMenuItemsBySelected = category => dispatch => {
  API.getMenuItemsWithCategory(category).then(data =>
    dispatch(actions.fetchMenu(data)),
  );
};

const handleDeleteItemById = id => dispatch => {
  API.deleteMenuItem(id).then(res => {
    if (res.status !== 200) return;
    dispatch(actions.deleteItem(id));
  });
};

const fetchDataForModalWindow = () => dispatch => {
  dispatch(actions.toogleModalFlag());
  // API.getMenuItemById(id).then(res => {
  //   dispatch(actions.toogleModalFlag(flag));
  // })
};

export default {
  fetchMenuItems,
  fetchMenuCategories,
  fetchMenuItemsBySelected,
  handleDeleteItemById,
  fetchDataForModalWindow,
};

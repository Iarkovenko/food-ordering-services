import * as API from '../services/api';
import actions from './menuActions';

const fetchAllMenu = () => dispatch => {
  API.getAllMenuItems()
    .then(data => {
      dispatch(actions.fetchRequestStart());
      dispatch(actions.fetchAllMenu(data));
      dispatch(actions.fetchRequestSuccess());
    })
    .catch(() => dispatch(actions.fetchRequestError()));
};

const fetchAllMenuCategories = () => dispatch => {
  API.getCategories()
    .then(data => {
      dispatch(actions.fetchRequestStart());
      dispatch(actions.fetchAllCategories(data));
      dispatch(actions.fetchRequestSuccess());
    })
    .catch(() => dispatch(actions.fetchRequestError()));
};

const fetchMenuItemsBySelected = category => dispatch => {
  API.getMenuItemsWithCategory(category)
    .then(data => {
      dispatch(actions.fetchRequestStart());
      dispatch(actions.fetchAllMenu(data));
      dispatch(actions.fetchRequestSuccess());
    })
    .catch(() => dispatch(actions.fetchRequestError()));
};

const changeSearchFilter = text => dispatch => {
  dispatch(actions.changeSearchFilter(text));
};

const resetFilter = () => dispatch => {
  dispatch(actions.resetFilter());
};

export default {
  fetchAllMenu,
  fetchAllMenuCategories,
  fetchMenuItemsBySelected,
  changeSearchFilter,
  resetFilter,
};

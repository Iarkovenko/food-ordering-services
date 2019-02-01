import { combineReducers } from 'redux';

import menuReducer from './menu/menuReducer';
import cartReducer from './cart/cartReducer';
import entityReducer from './entityReducer';

export default combineReducers({
  itemsID: menuReducer.menuItemsReducer,
  categoriesID: menuReducer.categoriesReducer,
  searchFilter: menuReducer.searchFilterReducer,
  cart: cartReducer,
  entities: entityReducer,
});

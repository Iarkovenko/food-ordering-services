import { createSelector } from 'reselect';

const getMenuItemsEntities = state => state.entities.menuItems;

const getCategoriesEntities = state => state.entities.categories;

export const filterSelector = state => state.searchFilter;

const getMenuItemsIds = state => state.itemsID;
const getCategoriesIds = state => state.categoriesID;
const getCartItemsIds = state => state.cart.items;
const getAmountItem = state => state.cart.amount;

export const getCategories = createSelector(
  [getCategoriesIds, getCategoriesEntities],
  (ids, entities) => ids.map(id => entities[id]),
);

export const menuItemsByFilter = createSelector(
  [getMenuItemsIds, getMenuItemsEntities, filterSelector],
  (ids, entities, filter) => {
    if (filter !== '') {
      return ids
        .map(id => entities[id])
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    }
    return ids.map(id => entities[id]);
  },
);

export const menuItemsCart = createSelector(
  [getCartItemsIds, getMenuItemsEntities, getAmountItem],
  (ids, entities, amount) =>
    ids.map(id => ({
      ...entities[id],
      amount: amount[id],
    })),
);

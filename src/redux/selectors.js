import { createSelector } from 'reselect';

const getMenuItemsEntities = state => state.entities.menuItems;

const getCategoriesEntities = state => state.entities.categories;

export const filterSelector = state => state.searchFilter;

const getMenuItemsIds = state => state.itemsID;
const getCategoriesIds = state => state.categoriesID;

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

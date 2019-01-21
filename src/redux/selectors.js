import { createSelector } from 'reselect';

export const getMenuItems = state => state.items;

export const filterSelector = state => state.filter;

export const menuItemsByFilter = createSelector(
  [getMenuItems, filterSelector],
  (items, filter) => {
    if (filter) {
      return items.filter(item => item.category === filter);
    }
    return items;
  },
);

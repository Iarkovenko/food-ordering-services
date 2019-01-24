import { createSelector } from 'reselect';

const getMenuItems = state => state.items;

export const filterSelector = state => state.searchFilter;

export const menuItemsByFilter = createSelector(
  [getMenuItems, filterSelector],
  (items, filter) => {
    if (filter !== '') {
      return items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    return items;
  },
);

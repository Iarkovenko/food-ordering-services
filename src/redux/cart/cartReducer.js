/* eslint-disable consistent-return */
import { combineReducers } from 'redux';
import types from './actionsTypesCart';

function items(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload) ? state : [...state, payload];

    case types.REMOVE_FROM_CART:
      return state.filter(id => id !== payload);

    default:
      return state;
  }
}

function amount(state = {}, { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      if (state.payload) return;
      return {
        ...state,
        [payload]: 1,
      };

    case types.REMOVE_FROM_CART: {
      return { ...state, [payload]: '_' };
    }

    case types.INCREASE_COUNT_ITEM_CART:
      return {
        ...state,
        [payload]: state[payload] ? state[payload] + 1 : 1,
      };

    case types.DECREASE_COUNT_ITEM_CART:
      return {
        ...state,
        [payload]: state[payload] > 1 ? state[payload] - 1 : 1,
      };

    default:
      return state;
  }
}

export default combineReducers({
  items,
  amount,
});

import types from './actionsTypesCart';

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: id,
});

const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: id,
});

const increaseCount = id => ({
  type: types.INCREASE_COUNT_ITEM_CART,
  payload: id,
});

const decreaseCount = id => ({
  type: types.DECREASE_COUNT_ITEM_CART,
  payload: id,
});

export default {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
};

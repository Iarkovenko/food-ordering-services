import types from './actionsTypesCart';

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: id,
});

export default {
  addToCart,
};

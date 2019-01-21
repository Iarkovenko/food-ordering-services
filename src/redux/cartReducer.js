import { combineReducers } from 'redux';
import types from './actionsTypesCart';

function items(state = [], { type, payload }) {
  switch (type) {
    case types.ADD_TO_CART:
      return state.includes(payload) ? state : [...state, payload];

    default:
      return state;
  }
}

// const amount (state = null, { type, payload }) => {
//     switch (key) {
//         case value:

//             break;

//         default:
//             break;
//     }
// }

export default combineReducers({
  items,
  // amount,
});

import { connect } from 'react-redux';

import { menuItemsCart } from '../../redux/selectors';
import actions from '../../redux/cart/cartActions';

import CartView from './СartView';

const mapStateToProps = state => ({
  products: menuItemsCart(state),
});

const mapDispatchToProps = {
  removeItemFromCart: actions.removeFromCart,
  increaseCount: actions.increaseCount,
  decreaseCount: actions.decreaseCount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartView);

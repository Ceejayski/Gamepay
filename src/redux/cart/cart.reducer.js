import CartTypes from './cart.types';
import handleToCartItem from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: handleToCartItem({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    case CartTypes.CLEAR_CART:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default CartReducer;

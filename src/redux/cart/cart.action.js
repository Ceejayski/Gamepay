import CartTypes from './cart.types';

export const addGame = (nextCartItem) => {
  const action = { type: CartTypes.ADD_TO_CART, payload: nextCartItem };
  return action;
};
export const clearCart = () => ({
  type: CartTypes.CLEAR_CART,
});

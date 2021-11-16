import { combineReducers } from 'redux';
import CartReducer from './cart/cart.reducer';
import ViewReducer from './views/view.reducers';

const rootReducer = combineReducers({
  cartData: CartReducer,
  viewedGames: ViewReducer,
});

export default rootReducer;

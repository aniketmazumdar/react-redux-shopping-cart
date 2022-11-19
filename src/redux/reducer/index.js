import { combineReducers } from 'redux';

import { userReducer } from './user.reducer';
import { categoriesReducer } from './category.reducer';
import { offersReducer } from './offer.reducer';
import { cartReducer } from './cart.reducer';
import { productsReducer } from './product.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  offers: offersReducer,
  products: productsReducer,
  cart: cartReducer,
});

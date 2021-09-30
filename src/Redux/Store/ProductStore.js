import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Reducer/productReducer';
import gmailReducer from '../Reducer/gmailReducer';

export default configureStore({
  reducer: {
    product: productReducer,
    gmail: gmailReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Reducer/productReducer';

export default configureStore({
  reducer: {
    product: productReducer,
  },
});

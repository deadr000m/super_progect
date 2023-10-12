import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './books/reducer';
import filterReducer from './slices/filterSlice';
import booksReducer from './slices/booksSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    //тут будет объект, содержащий ридьюсеры
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;

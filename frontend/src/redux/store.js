import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './books/reducer';
import filterReducer from './slices/filterSlice';
import booksReducer from './slices/booksSlice';

const store = configureStore({
  reducer: {
    //тут будет объект, содержащий ридьюсеры
    books: booksReducer,
    filter: filterReducer,
  },
});

export default store;

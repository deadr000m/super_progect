import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return [...state.filter((item) => item.id !== action.payload)];
    },
    toggleFavorite: (state, action) => {
      //   return state.map((item) => {
      //     return action.payload === item.id
      //       ? { ...item, isFavorite: !item.isFaforite }
      //       : item;
      //   });
      for (let item of state) {
        if (item.id === action.payload) item.isFaforite = !item.isFaforite;
      }
    },
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export default booksSlice.reducer;

export const thunkFunction = async (dispatch, getState) => {
  console.log(getState());
  try {
    let result = await axios.get('http://localhost:4000/random-book');
    if (result?.data?.title && result?.data?.author) {
      dispatch(addBook(createBookWithID(result.data, 'API')));
    }
  } catch (error) {
    console.log('Error with fetching random book', error);
  }
  console.log(getState());
};

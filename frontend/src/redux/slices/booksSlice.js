import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
import { setError } from './errorSlice';
const initialState = [];

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      let result = await axios.get(url);
      return result.data;
    } catch (error) {
      console.log(error);
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithID(action.payload, 'API'));
      }
    });
    // builder.addCase(fetchBook.rejected, (state, action) => {
    //   console.log(action);
    // });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export default booksSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
import { setError } from './errorSlice';
const initialState = {
  books: [],
  isLoadingViaAPI: false,
};

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      let result = await axios.get(url);
      return result.data;
    } catch (error) {
      console.log(error);
      thunkAPI.dispatch(setError(error.message));
      //option 1
      // throw error;

      //option 2
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((item) => item.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      //   return state.map((item) => {
      //     return action.payload === item.id
      //       ? { ...item, isFavorite: !item.isFaforite }
      //       : item;
      //   });
      for (let item of state.books) {
        if (item.id === action.payload) item.isFaforite = !item.isFaforite;
      }
    },
  },
  extraReducers:
    //option 1
    // (builder) => {

    //   builder.addCase(fetchBook.fulfilled, (state, action) => {
    //     if (action.payload.title && action.payload.author) {
    //       state.books.push(createBookWithID(action.payload, 'API'));
    //     }
    //   });
    //option 2
    {
      [fetchBook.pending]: (state) => {
        state.isLoadingViaAPI = true;
      },
      [fetchBook.fulfilled]: (state, action) => {
        state.isLoadingViaAPI = false;
        if (action.payload.title && action.payload.author) {
          state.books.push(createBookWithID(action.payload, 'API'));
        }
      },
      [fetchBook.rejected]: (state) => {
        state.isLoadingViaAPI = false;
      },
      //---------------------------------------------------
      // builder.addCase(fetchBook.rejected, (state, action) => {
      //   console.log(action);
      // });
    },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export default booksSlice.reducer;
export const selectBook = (state) => state.books.books;
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI;

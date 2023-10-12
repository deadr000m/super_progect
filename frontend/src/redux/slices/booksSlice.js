import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
const initialState = [];

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  let result = await axios.get('http://localhost:5000/random-book');
  console.log(result.data);
  return result.data;
});

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
    builder.addCase(fetchBook.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export default booksSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
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

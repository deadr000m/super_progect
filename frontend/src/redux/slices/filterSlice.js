import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  author: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state, action) => {
      return initialState;
    },
  },
});

console.log(filterSlice.actions);

console.log(filterSlice.actions.setTitleFilter('test'));

export const { setTitleFilter, resetFilters, setAuthorFilter } =
  filterSlice.actions; //это actionCreater, название которого совпатает с ридьюсером

export default filterSlice.reducer; //'это ридьюсер

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;

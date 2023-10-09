import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    resetFilters: (state, action) => {
      return initialState;
    },
  },
});

console.log(filterSlice.actions);

console.log(filterSlice.actions.setTitleFilter('test'));

export const { setTitleFilter, resetFilters } = filterSlice.actions; //это actionCreater, название которого совпатает с ридьюсером

export default filterSlice.reducer; //'это ридьюсер

export const selectTitleFilter = (state) => state.filter.title;

import * as a from './actionTypes';
const initialState = [];

const booksReducer = function (state = initialState, action) {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload];

    case a.DELETE_BOOK:
      return [...state.filter((item) => item.id !== action.payload)];

    case a.TOGGLE_FAFORITE:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, isFaforite: !item.isFaforite }
          : item;
      });

    default:
      return state;
  }
};

export default booksReducer;

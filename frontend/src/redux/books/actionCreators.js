import * as a from './actionTypes';

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = function (index) {
  return {
    type: a.DELETE_BOOK,
    payload: index,
  };
};

export const toggleFaforite = function (id) {
  return {
    type: a.TOGGLE_FAFORITE,
    payload: id,
  };
};

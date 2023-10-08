import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteBook } from '../../redux/books/actionCreators';
import './BookList.css';

function BookList() {
  let books = useSelector((state) => state.books);
  let dispatch = useDispatch();
  function deleteHandler(id) {
    dispatch(deleteBook(id));
  }
  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No booka avaible</p>
      ) : (
        <ul>
          {books.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="book-info">
                  {++index}. {item.title} by <strong>{item.author}</strong>
                </div>
                <div className="book-actions">
                  <button
                    onClick={() => {
                      deleteHandler(item.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default BookList;

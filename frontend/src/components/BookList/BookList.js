import React from 'react';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import './BookList.css';

function BookList() {
  let books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No booka avaible</p>
      ) : (
        <ul>
          {books.map((item, index) => {
            return (
              <li key={index}>
                <div className="book-info">
                  {++index}. {item.title} by <strong>{item.author}</strong>
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

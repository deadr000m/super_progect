import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteBook } from '../../redux/books/actionCreators';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { BsBookmarkCheck } from 'react-icons/bs';
import { toggleFaforite } from '../../redux/books/actionCreators';
import './BookList.css';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import { selectTitleFilter } from '../../redux/slices/filterSlice';

function BookList() {
  let books = useSelector((state) => state.books);
  let titleFilter = useSelector(selectTitleFilter);
  let dispatch = useDispatch();
  let filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(titleFilter.toLowerCase());
  });

  function deleteHandler(id) {
    dispatch(deleteBook(id));
  }

  function toggleHandler(id) {
    dispatch(toggleFaforite(id));
  }
  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No booka avaible</p>
      ) : (
        <ul>
          {filteredBooks.map((item, index) => {
            return (
              <li key={item.id}>
                <div className="book-info">
                  {++index}. {item.title} by <strong>{item.author}</strong>
                </div>
                <div className="book-actions">
                  {item.isFaforite ? (
                    <BsBookmarkCheckFill
                      BsBookmarkCheck
                      className="star-icon"
                      onClick={() => toggleHandler(item.id)}
                    />
                  ) : (
                    <BsBookmarkCheck
                      className="star-icon"
                      onClick={() => toggleHandler(item.id)}
                    />
                  )}

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

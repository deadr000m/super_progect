import './BookForm.css';
import { setError } from '../../redux/slices/errorSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { addBook } from '../../redux/books/actionCreators';
import { books } from '../../data/books';
// import { createBookWithID } from '../../utils/createBookWithID';
import createBookWithID from '../../utils/createBookWithID';
import { addBook } from '../../redux/slices/booksSlice';
import { fetchBook } from '../../redux/slices/booksSlice';

export const BookForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  async function handleAddRandomBookViaAPI() {
    dispatch(fetchBook('http://localhost:5000/random-book'));
  }

  function handleAddRandomBook() {
    let randomIndex = Math.floor(Math.random() * books.length);
    let ramdomBook = books[randomIndex];
    let randomBookWithId = createBookWithID(ramdomBook, 'random');
    dispatch(addBook(randomBookWithId));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title && author) {
      const book = createBookWithID({ title: title, author: author }, 'manual');
      console.log(addBook(book));
      dispatch(addBook(book));

      setAuthor('');
      setTitle('');
    } else {
      dispatch(setError('You must fill title and author'));
    }
  }
  return (
    <div className="app-block book-form">
      <h1>BookForm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          {' '}
          Add random
        </button>
        <button type="button" onClick={handleAddRandomBookViaAPI}>
          {' '}
          Add Random via API
        </button>
      </form>
    </div>
  );
};

export default BookForm;

import './BookForm.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { addBook } from '../../redux/books/actionCreators';
import { books } from '../../data/books';
// import { createBookWithID } from '../../utils/createBookWithID';
import createBookWithID from '../../utils/createBookWithID';
import { addBook } from '../../redux/slices/booksSlice';
import axios from 'axios';

export const BookForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  async function handleAddRandomBookViaAPI() {
    /*----------Используем библиотеку axios вместо fetch-----------------*/

    try {
      //   let response = await fetch('http://localhost:5000/random-book');
      //   let randomBook = await response.json();
      //   dispatch(addBook(randomBook));
      let result = await axios.get('http://localhost:4000/random-book');
      if (result?.data?.title && result?.data?.author) {
        dispatch(addBook(createBookWithID(result.data)));
      }
    } catch (error) {
      console.log('Error with fetching random book', error);
    }
  }
  function handleAddRandomBook() {
    let randomIndex = Math.floor(Math.random() * books.length);
    let ramdomBook = books[randomIndex];
    let randomBookWithId = createBookWithID(ramdomBook);
    dispatch(addBook(randomBookWithId));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title && author) {
      const book = createBookWithID({ title: title, author: author });
      console.log(addBook(book));
      dispatch(addBook(book));

      setAuthor('');
      setTitle('');
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

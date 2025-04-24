import React, { useState, useEffect } from "react";
import "./BooksPage.css";
import { Link } from "react-router-dom";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [visibleRows, setVisibleRows] = useState(4);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const showMoreBooks = () => {
    setVisibleRows((prevRows) => prevRows + 4);
  };

  const visibleBooks = books.slice(0, visibleRows * 4);

  return (
    <div className="books-page">
      <div className="navigation">
        <Link to="/wellness-library-books">
          <button className="nav-button">Books</button>
        </Link>
        <Link to="/articles">
          <button className="nav-button">Articles</button>
        </Link>
        <Link to="/wellness-library-videos">
          <button className="nav-button">Videos</button>
        </Link>
      </div>

      <div className="books-grid">
        {visibleBooks.map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="hover-options">
              <a href={book.readLink} target="_blank" rel="noopener noreferrer" className="read-link">
                Read the Book
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleRows * 4 < books.length && (
        <div className="more-button">
          <button onClick={showMoreBooks}>More...</button>
        </div>
      )}
    </div>
  );
};

export default BooksPage;

import React, { useState } from 'react';
import './BooksPage.css'; 
import { Link } from 'react-router-dom'; 


const booksData = [
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://reader.bookfusion.com/books/1216743-can-music-make-you-sick?type=epub'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/harmony-of-mind'
  },
  {
    title: 'Five People You Meet in Heaven',
    author: 'Mitch Albom',
    image: require('../Images/book1.png'),
    readLink: 'https://link-to-online-book.com/five-people'
  },

  // Add more books similarly
];

const BooksPage = () => {
  const [visibleRows, setVisibleRows] = useState(4); // State to manage visible rows

  // Function to handle the "More..." button click
  const showMoreBooks = () => {
    setVisibleRows((prevRows) => prevRows + 4); // Show 4 more rows when clicked
  };

  const visibleBooks = booksData.slice(0, visibleRows * 4); // Calculate visible books based on rows

  return (
    <div className="books-page">
      {/* Navigation buttons */}
      <div className="navigation">
      <Link to="/wellness-library-books">
          <button className="nav-button" >Books</button> {/* Use Link to navigate */}
      </Link>
      <Link to="/articles">
           <button className="nav-button">Articles</button> {/* Use Link to navigate */}
        </Link>
        <Link to="/wellness-library-videos">
          <button className="nav-button">Videos</button> {/* Use Link to navigate */}
        </Link>
        
      </div>

      <div className="books-grid">
        {visibleBooks.map((book, index) => (
          <div key={index} className="book-item">
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />
            <div className="hover-options">
              <a href={book.readLink} target="_blank" rel="noopener noreferrer" className="read-link">
                Read the Book
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      {visibleRows * 4 < booksData.length && (
        <div className="more-button">
          <button onClick={showMoreBooks}>More...</button>
        </div>
      )}
    </div>
  );
};

export default BooksPage;
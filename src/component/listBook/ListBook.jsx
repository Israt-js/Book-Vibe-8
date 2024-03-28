import React, { useState, useEffect } from 'react';

function ListedBooksPage() {
  const [sortBy, setSortBy] = useState();
  const [books, setBooks] = useState([]);
  const [tab, setTab] = useState('read');

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem(tab === 'read' ? 'readBooks' : 'wishlistBooks')) || [];
    setBooks(storedBooks);
  }, [tab]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    // Sort books based on the selected sorting criteria
    const sortedBooks = [...books].sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'pages') {
        return a.totalPages - b.totalPages;
      } else if (sortBy === 'year') {
        return a.publishedYear - b.publishedYear;
      }
    });
    setBooks(sortedBooks);
  };

  const handleAddToRead = () => {
    setTab('read');
  };

  const handleAddToWishlist = () => {
    setTab('wishlist');
  };

  return (
    <div>
      <header>
      <h2 className="text-2xl font-extrabold text-center pt-5 bg-slate-100 h-20 w-auto text-black">Books</h2>
      </header>
      <div>
      <label className='items-center ml-23 bg-green-400 rounded-md p-1' htmlFor="sort">Sort by:
          <select id="sort" value={sortBy} onChange={handleSortChange}>
            <option value="rating">Rating</option>
            <option value="pages">Number of Pages</option>
            <option value="year">Published Year</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={handleAddToRead}>Read Books</button>
        <button onClick={handleAddToWishlist}>Wishlist</button>
      </div>
      <div id="bookList">
        {books.length === 0 ? (
          <p>No books found.</p>
        ) : (
          <ul>
            {books.map((book, index) => (
              <li key={index}>{book.title} - {book.author}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ListedBooksPage;

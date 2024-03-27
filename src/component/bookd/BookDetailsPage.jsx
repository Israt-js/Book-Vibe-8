import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const book = useLoaderData();
  const { bookId } = useParams();

  console.log(book, bookId)

  return (
    <div className="book-details-container">
      <img src={book.image} alt={book.bookName} className="book-image" />
      <div className="book-details">
        <h2>{book.bookName}</h2>
        <p>Author: {book.author}</p>
        <p>Category: {book.category}</p>
        <p>Review: {book.review}</p>
        <p>Tags: {book.tags && book.tags.join(', ')}</p>
        <p>Total Pages: {book.totalPages}</p>
        <p>Publisher: {book.publisher}</p>
        <p>Year of Publishing: {book.yearOfPublishing}</p>
        <p>Rating: {book.rating}</p>
        <div className="button-container">
          <button className="read-button">Read</button>
          <button className="wishlist-button">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;


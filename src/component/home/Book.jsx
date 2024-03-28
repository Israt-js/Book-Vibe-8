import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to fetch book data');
            }
            return res.json();
        })
        .then(data => {
            if (data && data.books && Array.isArray(data.books)) {
                setBooks(data.books);
            } else {
                throw new Error('Invalid data format: expected an array of books');
            }
        })
        .catch(error => console.error('Error fetching book data:', error));
    }, []);

    return(
        <div className="mt-8 mb-8">
           <h2 className="text-2xl font-extrabold text-center text-black">Books</h2>
           <div className="BookDetails grid grid-cols-3 gap-5">
                {books.map((book, index) => (
                    <Link to={`/book/${book.bookId}`} key={index} className="book-card h-96 w-56 border flex flex-col items-center m-4">
                      <div className="h-52 w-50 bg-slate-100 justify-center rounded-md">
                        <img className="w-44 m-6 h-40" src={book.image} alt={book.bookName} />
                      </div>
                      <div className="book-details">
                        <div className="tags-container flex flex-wrap p-2">
                          {book.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="mr-2 mb-2 text-black rounded-md px-2 py-1 text-md font-medium bg-green-400">{tag}</span>
                          ))}
                        </div>
                          <h2 className="text-xl font-bold pl-5">{book.bookName}</h2>
                          <p className="text-base font-semibold pl-5 pb-2">By: {book.author}</p>
                        <div className="flex justify-between pl-5 pr-5">
                          <p>{book.category}</p>
                          <p>{book.rating} <i className="far fa-star"></i></p>
                        </div>
                      </div>
                    </Link>
                ))}
           </div>
        </div>
    );
};

export default Book;


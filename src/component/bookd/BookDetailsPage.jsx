import { useLoaderData, useParams } from "react-router-dom";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetailsPage = () => {
  const data = useLoaderData() || { books: [] };
  const { bookId } = useParams();
  const { books } = data;
  const book = books.find(job => job.bookId == bookId);
  console.log(bookId, books);


  const [addedToRead, setAddedToRead] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const addToLocalStorage = (key, value) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const newData = [...existingData, value];
    localStorage.setItem(key, JSON.stringify(newData));
  };

  const handleAddToRead = () => {
    if (!addedToRead) {
      addToLocalStorage('readBooks', book);
      setAddedToRead(true);
      toast.success('Book added to Read');
    } else {
      toast.warning('This book is already in your Read list.');
    }
  };

  const handleAddToWishlist = () => {
    if (!addedToWishlist && !addedToRead) {
      addToLocalStorage('wishlistBooks', book);
      setAddedToWishlist(true);
      toast.success('Book added to Wishlist');
    } else if (addedToRead) {
      toast.error('This book is already in your Read list. Remove it from Read list to add to Wishlist.');
    } else {
      toast.warning('This book is already in your Wishlist.');
    }
  };  
  return (
    <div className="">
      <div className="">
        {book && (
          <div className="">
          <div className="flex">
            {book.image && (
              <img className="h-[480px] w-[430px] ml-4 mt-4 mr-2" src={book.image} alt={book.bookName} />
            )}
            <div className="m-6">
              <h2 className="text-center text-2xl font-bold pl-2">{book.bookName}</h2>
              <p className="pl-2 pt-2 font-medium">By: {book.author}</p>
              <p className="pl-2 pt-4">{book.category}</p>
              <p className="pl-2 pt-3 w-96 text-lg"> <span className="font-bold text-1xl">Review:</span> {book.review}</p>
              <div className="tags-container flex flex-wrap p-2">
              {book.tags.map((tag, tagIndex) => (
                <p key={tagIndex} className="mr-2 mb-2 text-black rounded-md px-2 py-1 text-md font-medium bg-green-400"> <span className="font-bold text-1xl">Tag:</span> {tag}</p>
              ))}
              </div>
              <div className="mt-5 pl-2">
            <p>Number of pages:   {book.totalPages}</p>
            <p>Publisher:   {book.author}</p>
            <p>Year of publishing: {book.yearOfPublishing}</p>
            <p>Rating: {book.rating}</p>
               </div>

               <button className="ml-2 m-3 border p-1" onClick={handleAddToRead}>Read</button>
               <button className="bg-emerald-300 rounded-md p-1" onClick={handleAddToWishlist}>Wishlist</button>
               <ToastContainer></ToastContainer>
            </div>

          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailsPage;

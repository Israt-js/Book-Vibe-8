import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Banner from './component/home/Banner';
import BookDetailsPage from './component/bookd/BookDetailsPage';
import ListBook from './component/listBook/ListBook';
import PagToRead from './component/listBook/PagToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/book/:bookId",
        element: <BookDetailsPage></BookDetailsPage>,
        loader: () => fetch('../book.json'),
      },
      {
        path: "/list/",
        element: <ListBook></ListBook>,
      },
      {
        path: "/chart/",
        element: <PagToRead></PagToRead>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

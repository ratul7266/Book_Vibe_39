import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/homepage/books/Books";
import ErrorPage from "../ErrorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path:"/books",
        element: <Books></Books>
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: ()=> fetch('/booksData.json')
      }
    ],
    errorElement: <ErrorPage></ErrorPage>,
  }
]);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layout/MainLayout";
import Homepage from "./pages/homepage/Homepage";
import Books from "./pages/homepage/books/Books";
import { router } from "./routes/Routes";
import BookProvider from "./context/BookContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
);

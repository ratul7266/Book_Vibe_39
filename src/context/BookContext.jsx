import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();
const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("This Book Is Already Read List");
      return;
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} Is Added To Read List`);
    }
  };
  const handleWishList = (currentBook) => {
    const isExistInReadList = storedBooks.find((book)=>
      book.bookId === currentBook.bookId
    );
    if (isExistInReadList) {
      toast.error("This Book Is Already In Wish List");
      return;
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} Is Added To Wish List`);
    }
  };
  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;

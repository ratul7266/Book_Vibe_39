import React, { use } from "react";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books, "books");
  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center">Books</h2>
      {books.map((book) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={book.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-4">
                {book.tags.map((tag) => (
                  <div className="badge bg-green-50 text-green-600 font-semibold text-base">
                    {tag}
                  </div>
                ))}
              </div>
              <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
              <p className="font-semibold text-base">By: {book.author}</p>
              <hr className="border-t border-dashed border-gray-300 my-4" />
              <div className="card-actions justify-between">
                <div className="font-semibold">{book.category}</div>
                <div className="font-semibold">{book.rating}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllBooks;

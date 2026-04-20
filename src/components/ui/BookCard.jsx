import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";
const BookCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`}>
      <div className=" card bg-base-100 shadow-sm">
        <figure className="p-10 bg-gray-100">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded-lg h-62.5 "
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-4">
            {book.tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge bg-green-50 text-green-600 font-semibold text-base"
              >
                {tag}
              </div>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
          <p className="font-semibold text-base">By: {book.author}</p>
          <hr className="border-t border-dashed border-gray-300 my-4" />
          <div className="card-actions justify-between">
            <div className="font-semibold text-lg">{book.category}</div>
            <div className="font-semibold flex gap-2 text-lg">
              {book.rating}
              <Star />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;

import React from "react";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";
import BookCard from "../ui/BookCard";
import { Heart } from "lucide-react";

const ListedWishList = () => {
  const { wishList } = useContext(BookContext);

  if (wishList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 py-8">

        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
          <Heart className="w-10 h-10 text-gray-400" />
        </div>

        <div className="text-center flex flex-col gap-2">
          <h2 className="text-2xl font-medium text-gray-800">Your wishlist is empty</h2>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Books you love will appear here. Start exploring and add your favorites!
          </p>
        </div>

        <button className="px-6 py-2.5 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          Browse books
        </button>

      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {wishList.map((book, ind) => (
        <BookCard key={ind} book={book} />
      ))}
    </div>
  );
};

export default ListedWishList;
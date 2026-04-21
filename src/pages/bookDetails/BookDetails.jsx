import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";
import { useContext } from "react";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const {handleMarkAsRead , handleWishList} = useContext(BookContext); 
  const expectedBook = books.find((book) => book.bookId === Number(bookId));

  if (!expectedBook) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  return (
    <div className="mx-auto container">
      <div className="card lg:flex-row flex-col bg-base-100 shadow-sm mt-6 gap-0 items-stretch">
        <figure className="lg:w-1/2 w-full bg-base-200 flex items-center justify-center p-10 rounded-xl">
          <img
            src={expectedBook.image}
            alt={expectedBook.bookName}
            className="rounded-xl object-contain"
          />
        </figure>
        <div className="lg:w-1/2 w-full p-6 flex flex-col gap-0">
          <h2 className="card-title text-2xl font-bold mb-4">
            {expectedBook.bookName}
          </h2>
          <p className="font-semibold text-lg mb-2">
            By : {expectedBook.author}
          </p>
          <hr className="text-gray-400" />
          <p className="font-bold my-4">{expectedBook.category}</p>
          <hr className="text-gray-400" />
          <div>
            <p className="font-bold text-base my-4">
              Review: <span className="font-medium">{expectedBook.review}</span>
            </p>
          </div>
          <div className="flex">
            <h2 className="font-bold ">Tag</h2>
            {expectedBook.tags.map((tag, ind) => (
              <div
                key={ind}
                className="badge bg-green-50 text-green-600 font-semibold text-base"
              >
                {tag}
              </div>
            ))}
          </div>
          <hr className="text-gray-400 my-4" />
          <table border="1" cellPadding="10" cellSpacing="0">
            <tbody>
              <tr>
                <td>Number of Pages</td>
                <td className="font-bold">{expectedBook.totalPages}</td>
              </tr>
              <tr>
                <td>Publisher</td>
                <td className="font-bold">{expectedBook.publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing</td>
                <td className="font-bold">{expectedBook.yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td className="font-bold">{expectedBook.rating}</td>
              </tr>
            </tbody>
          </table>
          <div className="card-actions justify-start mt-6">
            <button
              className="btn border text-black"
              onClick={() => handleMarkAsRead(expectedBook)}
            >
              Mark As Read
            </button>
            <button className="btn bg-cyan-500 text-white" onClick={() => handleWishList(expectedBook)}>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

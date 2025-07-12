import React from "react";
import "./Book.css";
import bookimage from "../../assets/book.png";
import { NavLink } from "react-router-dom";
const Book = () => {
  return (
    <>
      <div className="bookall_contaner">
        <div className="bgimage">
          <h3>Book</h3>
        </div>
        <div className="bookall_maxwidth">
          <input
            className="form-control"
            type="text"
            placeholder="Search Your Favourite Books...."
          />
          <div className="book_flex">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
              return (
                <>
                  <div>
                    <NavLink to={"/book-details/jhlkjlk"}>
                      <img
                        src="https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY425_.jpg"
                        width={200}
                        height={300}
                        alt={`Book ${i}`}
                      />
                    </NavLink>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Book;

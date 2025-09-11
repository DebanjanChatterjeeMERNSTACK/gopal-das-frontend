import React, { useEffect, useState } from "react";
import "./Book_details.css";
import { MdDateRange } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { NavLink, useParams } from "react-router-dom";

const URL = import.meta.env.VITE_URL;
const Book_details = () => {
  const id = useParams().id;
  const [bookdetails, setbookdetails] = useState(null);
  const [loading, setloading] = useState(false);


  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

  useEffect(() => {
    setloading(true);
    fetch(`${URL}/get_id_book/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
      
        if (data.status === 200) {
          setbookdetails(data.data);
          setloading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);

  return (
    <div className="bookdel_contaner">
      <div className="bgimage">
        <h3>Book Details</h3>
      </div>

      <div className="bookdel_maxwidth">
        <div className="bookdel_grid">
          <div className="bookdel_img">
            <img
              src={bookdetails?.bookImage}
              alt="Book Cover"
              width={200}
              height={300}
            />
          </div>

          <div className="bookdel_contant">
            <h2>{bookdetails?.bookTitle}</h2>
            <div>
              <div>
                <MdDateRange />
                <span>{formatDate(bookdetails?.Date)}</span>
              </div>
              <div>
                <FaRegFilePdf />
                <span>{bookdetails?.bookPages?.length} pages</span>
              </div>
            </div>
            <div>
              <NavLink to={`/book-details/${id}/readbook/${id}`}><button className="btn2">Read Book</button></NavLink>
              <a href={bookdetails?.bookPdf} download={true} target="_blank"><button className="btn1">
                <FiDownload />
              </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3>Short Summary</h3>
          <p>
            {bookdetails?.bookDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book_details;

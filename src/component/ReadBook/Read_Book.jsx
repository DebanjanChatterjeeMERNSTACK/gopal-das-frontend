import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Read_Book.css";
import { useParams } from "react-router-dom";

const URL = import.meta.env.VITE_URL;

const PdfFlipBook = () => {
  const id = useParams().id;
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${URL}/get_id_book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data.bookPages);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="flipbook-wrapper">
      {images.length === 0 ? (
        <p>Loading Book...</p>
      ) : (
        <HTMLFlipBook
          width={500}
          height={700}
          size="stretch"
          minWidth={300}
          maxWidth={800}
          minHeight={400}
          maxHeight={1200}
          mobileScrollSupport={true}
          showCover={true}
          className="flipbook"
        >
          {images.slice(1,images.length).map((img, index) => (
            <div
              key={index}
              className={`page ${index === 0 ? "cover-page" : ""}`}
            >
              <img
                src={img}
                alt={`Page ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
};

export default PdfFlipBook;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import "./Book.css";

// Custom arrow components
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const Book = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 722,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
       {
        breakpoint: 666,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
           centerMode: true,
        },
      },
      {
        breakpoint: 522,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
           centerMode: true,
        },
      },
       {
        breakpoint: 468,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        //    centerMode: true,
        },
      },
      {
        breakpoint: 435,
        settings: {
          slidesToShow: 1.5,
          centerPadding: "0px",
        //    centerMode: true,
        },
      },
       {
        breakpoint: 333,
        settings: {
          slidesToShow: 1,
        //   centerPadding: "0px",
        //    centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="book_contaner">
      <div className="book_maxwidth">
        <h5>MY SERVICE</h5>
        <h2>What I Do</h2>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className="book_img">
              <img
                src="https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY425_.jpg"
                width={200}
                height={300}
                alt={`Book ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Book;

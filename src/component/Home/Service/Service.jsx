import React from "react";
import "./Service.css";
import book from "../../../assets/book.png";
import ngo from "../../../assets/ngo.png";
import writer from "../../../assets/paper.png";
import spekar from "../../../assets/spekar.png";
const Service = () => {
  const data = [
    {
      title: "good book reader",
      contant: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri",
      img: book,
    },
    {
      title: "good ngo support",
      contant: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri",
      img: ngo,
    },
    {
      title: "good writer ",
      contant: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri",
      img: writer,
    },
    {
      title: "good spakar",
      contant: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Ri",
      img: spekar,
    },
  ];
  return (
    <>
      <div className="service_contaner">
        <div className="service_maxwidth">
          <h5>MY SERVICE</h5>
          <h2>What I Do</h2>
          <div className="service_flex">
            {data.map((e, i) => {
              return (
                <>
                  <div className="service_box" key={i}>
                    <img src={e.img} width={60} height={60}/>
                    <h1>{e.title}</h1>
                    <p>{e.contant}</p>
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
export default Service;

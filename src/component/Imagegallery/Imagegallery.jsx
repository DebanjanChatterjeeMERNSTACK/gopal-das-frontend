import React, { useState, useEffect } from "react";
import "./ImageGallery.css";
import image from "../../assets/writer.png";
import { RxCross2 } from "react-icons/rx";
import bgimg from "../../assets/bgimg.jpg";

const URL = import.meta.env.VITE_URL;
const Imagegallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setimage] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch(`${URL}/get_all_galleryimage`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        if (data.status === 200) {
          setimage(data.data);
          setloading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);

  return (
    <>
      <div className="imggallery_contaner">
        <div className="bgimage">
          <h3>Image Gallery</h3>
        </div>
        <div className="imggallery_maxwidth">
          <div className="gallery-grid">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border text-success"
                  role="status"
                ></div>
              </div>
            ) : (image.length>0 ? (
              image.map((img, index) => (
                <img
                  key={index}
                  src={img.galleryImage}
                  alt={`img-${index}`}
                  onClick={() => setSelectedImage(img.galleryImage)}
                  className="thumbnail"
                />
              ))
            ):(
             <div className="text-center w-100 mt-5">
              <h2 className="text-danger">Oops! 😞</h2>
              <p className="fw-semibold">No image found in the gallery.</p>
            </div>
            )
            )}
          </div>

          {selectedImage && (
            <div className="modal" onClick={() => setSelectedImage(null)}>
              <span className="close">
                <RxCross2 />
              </span>
              <img
                src={selectedImage}
                alt="Full view"
                className="modal_image"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Imagegallery;

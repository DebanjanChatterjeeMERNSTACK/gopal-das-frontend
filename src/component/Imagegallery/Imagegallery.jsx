import React, { useState } from "react";
import "./ImageGallery.css";
import image from "../../assets/writer.jpg";
import { RxCross2 } from "react-icons/rx";
import bgimg from "../../assets/bgimg.jpg"


const Imagegallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="imggallery_contaner">
        <div className="bgimage">
            <h3>Image Gallery</h3>
        </div>
        <div className="imggallery_maxwidth">
            <div className="gallery-grid">
              {[1, 2, 3, 4, 5, 6,7,8].map((img, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`img-${index}`}
                  onClick={() => setSelectedImage(image)}
                  className="thumbnail"
                />
              ))}
            </div>

            {selectedImage && (
              <div className="modal" onClick={() => setSelectedImage(null)}>
                <span className="close"><RxCross2 /></span>
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

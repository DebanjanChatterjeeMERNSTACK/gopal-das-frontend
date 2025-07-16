import React, { use, useRef, useState } from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { RxCross2 } from "react-icons/rx";

const Dashboard_imagegallery = () => {
  const [galleryimage, setgalleryimage] = useState([]);
  const [previewFiles, setPreviewFiles] = useState([]);

  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const fileInputRef = useRef();

  const handleCheckboxChange = (id) => {
    setSelectedImages((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const deleteFile = (indexToRemove) => {
    const updated = previewFiles.filter((_, index) => index !== indexToRemove);
    setPreviewFiles(updated);
    const deleteimages = galleryimage.filter(
      (item, index) => index !== indexToRemove
    );
    setgalleryimage(deleteimages);

     if (updated.length === 0 && fileInputRef.current) {
    fileInputRef.current.value = "";
  }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      galleryimage.forEach((e) => {
        formdata.append("galleryImage", e);
      });
      console.log([...formdata.entries()]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {};

  return (
    <>
      {/* <Dashboard_header /> */}
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <h4 className="text-success">Image Gallery</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Gallery Image <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="file"
                ref={fileInputRef}
                id="formFile"
                required
                multiple
                accept=".jpg, .png"
                onChange={(e) => {
                  const selectedFiles = Array.from(e.target.files);

                  if (selectedFiles.length > 5) {
                    Swal.fire({
                      title: "You can only upload up to 5 images.",
                      icon: "warning",
                      confirmButtonText: "Ok",
                    });
                    fileInputRef.current.value = ""; // reset file input
                    return;
                  }

                  const validFiles = selectedFiles.filter(
                    (file) => file instanceof File
                  );
                  setgalleryimage(validFiles); // keep this updated

                  const previewFileData = [];

                  validFiles.forEach((file) => {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      previewFileData.push({
                        file,
                        previewUrl: event.target.result,
                      });
                      if (previewFileData.length === validFiles.length) {
                        setPreviewFiles(previewFileData);
                      }
                    };
                    reader.readAsDataURL(file);
                  });
                }}
                disabled={galleryimage.length > 5}
              />
            </div>
            {previewFiles.length > 0 && (
              <div className="mb-3">
                <label className="form-label">Preview Gallery Image</label>
                <div className="d-flex gap-2 flex-wrap">
                  {previewFiles.map((item, id) => (
                    <div className="position-relative" key={id}>
                      <img
                        src={item.previewUrl}
                        width={150}
                        height={100}
                        alt="preview"
                      />
                      <div
                        role="button"
                        className="position-absolute top-0 end-0 text-white bg-danger px-2 py-1 rounded-circle"
                        onClick={() => deleteFile(id)}
                      >
                        <RxCross2 />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button type="submit" className="btn btn-success">
              Submit Post
            </button>
          </form>

          <div className="mt-3 ">
            <button
              className="btn btn-danger mb-3"
              onClick={handleDelete}
              hidden={selectedImages.length === 0}
            >
              Delete Selected
            </button>

            <div className="row">
              {images.map((img) => (
                <div className="col-md-3 mb-4" key={img._id}>
                  <div className="card">
                    <img
                      src={img.imageUrl}
                      className="card-img-top"
                      alt="gallery"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input me-2"
                          checked={selectedImages.includes(img._id)}
                          onChange={() => handleCheckboxChange(img._id)}
                        />
                        Select
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard_imagegallery;

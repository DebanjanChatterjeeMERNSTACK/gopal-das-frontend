import React from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Dashboard_imagegallery = () => {
  return (
    <>
      <Dashboard_header />
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <h4 className="text-success">Image Gallery</h4>
          <form>
            <div class="mb-3">
              <label for="formFile" class="form-label">
               Gallery Image
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <button type="submit" class="btn btn-success">
             Submit Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard_imagegallery;

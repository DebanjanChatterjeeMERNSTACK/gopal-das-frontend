import React from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Dashboard_videogallery = () => {
  return (
    <>
      <Dashboard_header />
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <h4 className="text-success">Video Gallery</h4>
          <form>
           
            
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Video Gallery Link
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Video Link"
                rows="3"
              ></textarea>
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

export default Dashboard_videogallery;

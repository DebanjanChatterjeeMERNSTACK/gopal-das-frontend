import React from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";

const Dashboard_blog = () => {
  return (
    <>
      <Dashboard_header />
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Default file input example
            </label>
            <input
              class="form-control"
              type="text"
              placeholder="Default input"
              aria-label="default input example"
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Default file input example
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" class="btn btn-success">Success</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard_blog;

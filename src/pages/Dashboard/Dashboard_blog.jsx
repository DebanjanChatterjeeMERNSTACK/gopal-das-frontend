import React from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";

const Dashboard_blog = () => {
  return (
    <>
      <Dashboard_header />
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <input
            class="form-control"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          ></input>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Default file input example
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard_blog;

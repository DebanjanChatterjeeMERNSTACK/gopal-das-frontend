import React, { useState } from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Dashboard_videogallery = () => {
  const [link, setlink] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    console("delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <Dashboard_header />
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <h4 className="text-success">Video Gallery</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Video Gallery Link <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                required
                placeholder="Video Link"
                rows="3"
                value={link}
                onChange={(e) => {
                  setlink(e.target.value);
                }}
              ></textarea>
            </div>

            {loading ? (
              <button className="btn btn-success" disabled>
                <div className="spinner-border text-light" role="status"></div>
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                Submit Link
              </button>
            )}
          </form>

          <div className="table-responsive">
            <table className="table table-bordered mt-5 border-success">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Video Link</th>
                  <th scope="col">Video Preview</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Video Preview</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Jacob</td>
                  <td>Video Preview</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard_videogallery;

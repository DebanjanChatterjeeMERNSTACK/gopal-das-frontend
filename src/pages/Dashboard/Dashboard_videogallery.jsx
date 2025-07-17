import React, { useEffect, useState } from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const URL = import.meta.env.VITE_URL;

const Dashboard_videogallery = () => {
  const [link, setlink] = useState("");
  const [loading, setloading] = useState(false);
  const [videodata, setvideodata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setloading(true);
      fetch(`${URL}/add_video`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          link: link,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status == 200) {
            setloading(false);
            Swal.fire({
              title: data.text,
              icon: data.mess, // 'success', 'error', 'warning', 'info', or 'question'
              confirmButtonText: "Ok",
            });
             fetchdata();
             setlink("")
          } else {
            Swal.fire({
              title: data.text,
              icon: data.mess, // 'success', 'error', 'warning', 'info', or 'question'
              confirmButtonText: "Ok",
            });
            setloading(false);
          }
        });
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  const fetchdata = () => {
    fetch(`${URL}/get_video`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        if (data.status === 200) {
          setvideodata(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleDelete = (id) => {
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
        fetch(`${URL}/delete_video/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 200) {
              Swal.fire({
                title: data.text,
                icon: data.mess, // 'success', 'error', 'warning', 'info', or 'question'
                confirmButtonText: "Ok",
              });
              fetchdata();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <>
      {/* <Dashboard_header /> */}
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
                {videodata.length > 0 ? (
                  videodata.map((e, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{e.link}</td>
                      <td></td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDelete(e._id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center text-danger fw-bolder"
                    >
                      Data Not Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard_videogallery;

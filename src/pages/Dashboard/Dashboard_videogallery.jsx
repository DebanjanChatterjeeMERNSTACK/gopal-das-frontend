import React, { Children, useEffect, useState } from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_URL;

const Dashboard_videogallery = () => {
  const navigate = useNavigate();
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
            setlink("");
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
    setloading(true);
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
          setloading(false);
        } else if (data.text === "Invalid Token") {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
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
                Youtube Embed Video Link <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                required
                placeholder="Youtube Embed Video Link"
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

          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "50vh", width: "100%" }}
            >
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row mt-3">
              {videodata.length > 0 ? (
                videodata.map((e, index) => (
                  <div
                    key={index}
                    className=" col-sm-6 col-md-6 col-lg-6 mb-4 position-relative"
                  >
                    <div
                      // className="w-100 h-100"
                      dangerouslySetInnerHTML={{ __html: e.link }}
                      style={{
                        height: "200px",
                        overflow: "hidden",
                      }}
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 20,
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-danger rounded-circle"
                        onClick={() => handleDelete(e._id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center mt-5 w-100">
                  <h2 className="text-danger">Oops! 😞</h2>
                  <p className="fw-semibold">No videos found in the gallery.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard_videogallery;

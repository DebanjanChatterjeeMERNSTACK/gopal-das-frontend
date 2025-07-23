import React, { useEffect, useState } from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const URL = import.meta.env.VITE_URL;

const Dashboard_blog = () => {
  const [blogimage, setblogimage] = useState("");
  const [blogtitle, setblogtitle] = useState("");
  const [blogdesceiption, setblogdescription] = useState("");
  const [blog, setblog] = useState([]);
  const [id, setid] = useState("");
  const [key, setkey] = useState(Date.now());
  const [preview, setpreview] = useState("");
  const [toggal, settoggal] = useState(false);
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const formdata = new FormData();
      formdata.append("blog_Image", blogimage);
      formdata.append("blogTitle", blogtitle);
      formdata.append("blogDescription", blogdesceiption);
      if (toggal) {
        // console.log(formdata, "update");
        fetch(`${URL}/update_blog/${id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // "Content-Type": "multipart/form-data",
          },
          body: formdata,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.status == 200) {
              setloading(false);
              setpreview("");
              setblogimage("");
              setblogdescription("");
              setblogtitle("");
              setkey(Date.now());
              settoggal(false);
              fetchdata();
              Swal.fire({
                title: data.text,
                icon: data.mess, // 'success', 'error', 'warning', 'info', or 'question'
                confirmButtonText: "Ok",
              });
            } else {
              Swal.fire({
                title: data.text,
                icon: data.mess, // 'success', 'error', 'warning', 'info', or 'question'
                confirmButtonText: "Ok",
              });
              setloading(false);
            }
          });
      } else {
        // console.log(formdata, "create");
        fetch(`${URL}/add_blog`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            // "Content-Type": "multipart/form-data",
          },
          body: formdata,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.status == 200) {
              setloading(false);
              setpreview("");
              setblogimage("");
              setblogdescription("");
              setblogtitle("");
              setkey(Date.now());
              fetchdata();
              Swal.fire({
                title: data.text,
                icon: data.mess, // 'success', 'error', 'warning', 'info', or 'question'
                confirmButtonText: "Ok",
              });
            } else {
              Swal.fire({
                title: data.text,
                icon: data.mess, // 'success', 'error', 'warning', 'info', or 'question'
                confirmButtonText: "Ok",
              });
              setloading(false);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchdata = () => {
    setloading(true);
    fetch(`${URL}/get_blog`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        if (data.status === 200) {
          setblog(data.data);
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

  const handleEdit = (data) => {
    console.log(data);
    settoggal(true);
    setid(data._id);
    setpreview(data.blogImage);
    setblogtitle(data.blogTitle);
    setblogdescription(data.blogDescription);
  };

  const handleBack = () => {
    settoggal(false);
    setid("");
    setpreview("");
    setblogtitle("");
    setblogdescription("");
  };

  const handleDelete = (id) => {
    setloading(true);
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
        fetch(`${URL}/delete_blog/${id}`, {
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
              setloading(false)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }else{
        setloading(false)
      }
    });
  };

  return (
    <>
      {/* <Dashboard_header /> */}
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <h4 className="text-success">Blog</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Blog Title <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                aria-label="default input example"
                required
                value={blogtitle}
                onChange={(e) => {
                  setblogtitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Blog Image <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                key={key}
                type="file"
                id="formFile"
                accept=".jpg, .jpeg"
                required={toggal === false}
                onChange={(e) => {
                  const file = e.target.files[0];
                  setblogimage(file);
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    setpreview(event.target.result); // set preview image URL
                  };
                  reader.readAsDataURL(file); // read file
                }}
              />
            </div>
            {preview && (
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Preview Blog Image
                </label>
                <div>
                  <img src={preview} width={200} height={100} />
                </div>
              </div>
            )}
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Blog Description <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Description"
                rows="3"
                required
                value={blogdesceiption}
                onChange={(e) => setblogdescription(e.target.value)}
              ></textarea>
            </div>
            {loading ? (
              <button className="btn btn-success" disabled>
                <div className="spinner-border text-light" role="status"></div>
              </button>
            ) : toggal ? (
              <>
                <button type="submit" className="btn btn-success me-2">
                  Update Blog
                </button>
                <button className="btn btn-success" onClick={handleBack}>
                  Back
                </button>
              </>
            ) : (
              <button type="submit" className="btn btn-success">
                Submit Blog
              </button>
            )}
          </form>
          <div className="table-responsive">
            <table className="table table-bordered mt-5 border-success">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Blog Image</th>
                  <th scope="col">Blog Title</th>
                  <th scope="col">Blog Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : blog.length > 0 ? (
                  blog.map((e, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>
                        <img src={e.blogImage} width={150} height={100} />
                      </td>
                      <td>{e.blogTitle}</td>
                      <td>{e.blogDescription}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary me-2"
                          onClick={() => handleEdit(e)}
                        >
                          <FaEdit />
                        </button>
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
                    <td colSpan="6" className="text-center text-danger">
                      <strong>Oops! 😞 No contact data found.</strong>
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

export default Dashboard_blog;

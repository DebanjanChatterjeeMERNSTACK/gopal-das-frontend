import React, { useEffect, useState } from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaFilePdf, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_URL;

const Dashboard_book = () => {
  const navigate = useNavigate();
  const [bookimage, setbookimage] = useState("");
  const [booktitle, setbooktitle] = useState("");
  const [bookpdf, setbookpdf] = useState("");
  const [bookdesceiption, setbookdescription] = useState("");
  const [book, setbook] = useState([]);
  const [id, setid] = useState("");
  const [key, setkey] = useState(Date.now());
  const [preview, setpreview] = useState("");
  const [toggal, settoggal] = useState(false);
  const [loading, setloading] = useState(false);

  const fetchdata = () => {
    setloading(true);
    fetch(`${URL}/get_book`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        if (data.status === 200) {
          setbook(data.data);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("book_image", bookimage);
      formdata.append("bookTitle", booktitle);
      formdata.append("book_pdf", bookpdf);
      formdata.append("bookDescription", bookdesceiption);
      if (toggal) {
        console.log(formdata, "update");
        fetch(`${URL}/update_book/${id}`, {
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
              Swal.fire({
                title: data.text,
                icon: data.mess, // 'success', 'error', 'warning', 'info', or 'question'
                confirmButtonText: "Ok",
              });
              setpreview("");
              setbookimage("");
              setbookdescription("");
              setbooktitle("");
              setbookpdf("");
              setkey(Date.now());
              settoggal(false);
              fetchdata();
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
        console.log(formdata, "create");
        fetch(`${URL}/add_book`, {
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
              setbookimage("");
              setbookdescription("");
              setbooktitle("");
              setbookpdf("");
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (data) => {
    settoggal(true);
    setid(data._id);
    setpreview(data.bookImage);
    setbooktitle(data.bookTitle);
    setbookdescription(data.bookDescription);
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
        fetch(`${URL}/delete_book/${id}`, {
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
              setloading(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setloading(false);
      }
    });
  };
  const handleBack = () => {
    settoggal(false);
    setid("");
    setpreview("");
    setbookpdf("");
    setbooktitle("");
    setbookdescription("");
  };

  return (
    <div>
      {/* <Dashboard_header /> */}
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <h4 className="text-success">Book</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Book Image <span className="text-danger">*</span>
              </label>
              <input
                key={key}
                className="form-control"
                type="file"
                id="formFile"
                accept=".jpg, .jpeg"
                required={toggal === false}
                onChange={(e) => {
                  const file = e.target.files[0];
                  setbookimage(file);
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
                  Preview Book Image
                </label>
                <div>
                  <img src={preview} width={150} height={200} />
                </div>
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Book Title <span className="text-danger">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                aria-label="default input example"
                required
                value={booktitle}
                onChange={(e) => {
                  setbooktitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Book PDF <span className="text-danger">*</span>
              </label>
              <input
                key={key}
                className="form-control"
                type="file"
                id="formFile"
                required={toggal === false}
                accept=".pdf"
                onChange={(e) => setbookpdf(e.target.files[0])}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Book Description <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Description"
                required
                value={bookdesceiption}
                onChange={(e) => {
                  setbookdescription(e.target.value);
                }}
                rows="3"
              ></textarea>
            </div>
            {loading ? (
              <button className="btn btn-success" disabled>
                <div className="spinner-border text-light" role="status"></div>
              </button>
            ) : toggal ? (
              <>
                <button type="submit" className="btn btn-success me-2">
                  Update Book
                </button>
                <button className="btn btn-success" onClick={handleBack}>
                  Back
                </button>
              </>
            ) : (
              <button type="submit" className="btn btn-success">
                Submit Book
              </button>
            )}
          </form>

          <div className="table-responsive">
            <table className="table table-bordered mt-5 border-success">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Book Image</th>
                  <th scope="col">Book Title</th>
                  <th scope="col">Book PDF</th>
                  <th scope="col">Book Description</th>
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
                ) : book.length > 0 ? (
                  book.map((e, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>
                            <img src={e.bookImage} width={150} height={200} />
                          </td>
                          <td>{e.bookTitle}</td>
                          <td>
                            <a href={e.bookPdf} target="_blank">
                              <FaFilePdf
                                style={{ color: "green", fontSize: "25px" }}
                              />
                            </a>
                          </td>
                          <td>{e.bookDescription}</td>
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
                      </>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-danger">
                      <strong>Oops! 😞 No book data found.</strong>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_book;

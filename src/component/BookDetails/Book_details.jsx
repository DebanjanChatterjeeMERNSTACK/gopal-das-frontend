import React, { useEffect, useState } from "react";
import "./Book_details.css";
import { MdDateRange } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { NavLink, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegComments } from "react-icons/fa6";

const URL = import.meta.env.VITE_URL;

const Book_details = () => {
  const id = useParams().id;
  const [bookdetails, setbookdetails] = useState(null);
  const [loading, setloading] = useState(false); // 📌 For fetching book/comments
  const [submitting, setSubmitting] = useState(false); // 📌 For comment submit
  const [allComments, setallComments] = useState([]);

  // Comment form state
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  // 📌 Fetch book details
  useEffect(() => {
    setloading(true);
    fetch(`${URL}/get_id_book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setbookdetails(data.data);
        }
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, [id]);

  // 📌 Fetch comments
  const fetchComments = () => {
    setloading(true);
    fetch(`${URL}/get_comment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setallComments(data.data);
        }
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  // 📌 Submit comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true); // start loader
    const newComment = {
      commentsName: fullname,
      commentsEmail: email,
      comments: comments,
    };

    fetch(`${URL}/add_comment/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    })
      .then((data) => data.json())
      .then((json) => {
        setFullname("");
        setEmail("");
        setComments("");
        Swal.fire({
          title: json.text,
          icon: json.mess,
          confirmButtonText: "Ok",
        });
        fetchComments(); // refresh comments after submit
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSubmitting(false); // stop loader
      });
  };

  return (
    <div className="bookdel_contaner">
      <div className="bgimage">
        <h3>Book Details</h3>
      </div>

      <div className="bookdel_maxwidth">
        {/* Loader for fetch */}
        {loading && (
          <div className="d-flex justify-content-center my-5">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!loading && bookdetails && (
          <>
            <div className="bookdel_grid">
              <div className="bookdel_img">
                <img
                  src={bookdetails?.bookImage}
                  alt="Book Cover"
                  width={200}
                  height={300}
                />
              </div>

              <div className="bookdel_contant">
                <h2>{bookdetails?.bookTitle}</h2>
                <div>
                  <div>
                    <MdDateRange />
                    <span>{formatDate(bookdetails?.Date)}</span>
                  </div>
                  <div>
                    <FaRegFilePdf />
                    <span>{bookdetails?.bookPages?.length} pages</span>
                  </div>
                </div>
                <div>
                  <NavLink to={`/book-details/${id}/readbook/${id}`}>
                    <button className="btn2">Read Book</button>
                  </NavLink>
                  {/* <a href={bookdetails?.bookPdf} download target="_blank">
                    <button className="btn1">
                      <FiDownload />
                    </button>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="book-summary-box">
              <h3>Short Summary</h3>
              <p>{bookdetails?.bookDescription}</p>
            </div>

            {/* 📌 Comment Form */}
            <div className="comment-section mt-4 bg-white p-4 rounded shadow-sm">
              <h3>Leave a Comment</h3>
              <form onSubmit={handleCommentSubmit} className="comment-form">
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Comments</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    required
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Write your comment here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                  disabled={submitting}
                >
                  {submitting ? (
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    />
                  ) : (
                    "Submit Comment"
                  )}
                </button>
              </form>
            </div>

            {/* 📌 Show Comments */}
            <div className="all-comments mt-4">
              <h3>All Comments</h3>
              {allComments.length > 0 ? (
                allComments.map((c, idx) => (
                  <div key={idx} className="comment-card bg-white p-3 rounded shadow-sm mb-3">
                    <div>
                      <FaRegComments
                        size={"30"}
                        style={{
                          backgroundColor: "#b4fbff",
                          color: "#00939b",
                          padding: "4px",
                          borderRadius: "50%",
                          marginBottom: "2px",
                        }}
                      />
                      <h5 className="fs-6">
                        {c.commentsName}{" "}
                        <small className="text-muted">({c.commentsEmail})</small>
                      </h5>
                    </div>

                    <p>{c.comments}</p>
                    <small className="text-muted">
                      {c.createdAt ? formatDate(c.createdAt) : ""}
                    </small>
                  </div>
                ))
              ) : (
                <p className="text-muted">No comments yet. Be the first one!</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Book_details;

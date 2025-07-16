import React, { useState } from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Dashboard_blog = () => {
const [blogimage, setblogimage] = useState("");
  const [blogtitle, setblogtitle] = useState("");
  const [blogdesceiption, setblogdescription] = useState("");

  const [preview, setpreview] = useState("");
  const [toggal, settoggal] = useState(false);
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("blogImage", blogimage);
      formdata.append("blogTitle", blogtitle);
      formdata.append("blogDescription", blogdesceiption);
      if (toggal) {
        console.log(formdata, "update");
      } else {
        console.log(formdata, "create");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (data) => {
    settoggal(true);
    setpreview("");
    setblogtitle("");
    setblogdescription("");
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
                onChange={(e)=>{setblogtitle(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
               Blog Image <span className="text-danger">*</span>
              </label>
              <input className="form-control" type="file" id="formFile"
              
                accept=".jpg, .jpeg"
                required
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
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Blog Description <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Description"
                rows="3"
                required
                value={blogdesceiption}
                onChange={(e)=>setblogdescription(e.target.value)}
              ></textarea>
            </div>
             {loading ? (
              <button className="btn btn-success" disabled>
                <div className="spinner-border text-light" role="status"></div>
              </button>
            ) : toggal ? (
              <button type="submit" className="btn btn-success">
                Update Blog
              </button>
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
                <tr>
                  <th >1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" className="btn btn-primary me-2" onClick={()=>handleEdit(data)}>
                      <FaEdit />
                    </button>

                    <button type="button" className="btn btn-danger" onClick={()=>handleDelete(id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <button type="button" className="btn btn-primary me-2" onClick={()=>handleEdit(data)}>
                      <FaEdit />
                    </button>

                    <button type="button" className="btn btn-danger" onClick={()=>handleDelete(id)}>
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

export default Dashboard_blog;

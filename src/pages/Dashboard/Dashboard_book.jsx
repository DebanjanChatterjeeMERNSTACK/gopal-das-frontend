import React from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaFilePdf, FaTrash } from "react-icons/fa";

const Dashboard_book = () => {
  return (
    <div>
      <Dashboard_header />
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <h4 className="text-success">Book</h4>
          <form>
              <div class="mb-3">
              <label for="formFile" class="form-label">
                Book Image
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Book Title
              </label>
              <input
                class="form-control"
                type="text"
                placeholder="Title"
                aria-label="default input example"
              />
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Book PDF
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Book Description
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Description"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">
              Submit Book
            </button>
          </form>
          <div class="table-responsive">
            <table class="table table-bordered mt-5 border-success">
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
                <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><FaFilePdf style={{color:"green",fontSize:"25px"}}/></td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" className="btn btn-primary me-2">
                      <FaEdit />
                    </button>

                    <button type="button" className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td><FaFilePdf style={{color:"green",fontSize:"25px"}}/></td>
                  <td>@fat</td>
                  <td>
                    <button type="button" className="btn btn-primary me-2">
                      <FaEdit />
                    </button>

                    <button type="button" className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_book;

import React from "react";
import Dashboard_header from "../../Dashboard/Header/Dashboard_header";
import "./Dashboard.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Dashboard_contact = () => {
  return (
    <>
      {/* <Dashboard_header /> */}
      <div className="dashbord_contaner">
        <div className="dashbord_maxwidth">
          <h4 className="text-success">Contact</h4>
          <div className="table-responsive">
            <table className="table table-bordered mt-2 border-success">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Contact Full Name</th>
                  <th scope="col">Contact Email</th>
                  <th scope="col">Contact Phone Number</th>
                  <th scope="col">Contact Message</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>
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
    </>
  );
};

export default Dashboard_contact;

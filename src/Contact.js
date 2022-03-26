import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ContactContext from "./ContactContext";

export default function Contact() {
  let { userData, setUserData } = useContext(ContactContext);
  const handledelete = (index) => {
    let confirm = window.confirm("Are you sure, you want to delete?");
    if (confirm) {
      userData.splice(index - 1, 1);
      setUserData([...userData]);
    }
  };
  return (
    <div>
     
      <div>
      <div className="top-container d-flex mb-4">
        <h2  className="stat">Contact</h2>
        <Link to="/createuser" className="btn btn-primary mr-4">
          Create Contact
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="stat">Contact Lists</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              style={{ width: "100%", cellspacing: "0" }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Home</th>
                  <th>Age</th>
                  <th>Birth date</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Home</th>
                  <th>Age</th>
                  <th>Birth date</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                {userData.map((obj, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{obj.userName}</td>
                      <td>{obj.Team}</td>
                      <td>{obj.Home}</td>
                      <td>{obj.age}</td>
                      <td>{obj.Birthdate}</td>
                      <td>$ {obj.salary}</td>
                      <td>
                        <Link
                          to={"/users/edit/" + (index + 1)}
                          className="btn btn-sm btn-primary"
                        >
                          <EditIcon/>
                        </Link>
                        <button
                          onClick={() => {
                            handledelete(index + 1);
                          }}
                          className="btn btn-sm btn-danger ml-1"
                        >
                         <DeleteIcon/>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Users() {
  let { userData, setUserData } = useContext(UserContext);
  const handledelete = (index) => {
    let confirm = window.confirm("Are you sure, you want to delete?");
    if (confirm) {
      userData.splice(index - 1, 1);
      setUserData([...userData]);
    }
  };

  return (
    <div>
      <div className="top-container d-flex mb-4">
        <h2 className="stat">Users</h2>
        <Link to="/createuser" className="btn btn-primary mr-4">
          Create User
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h4 className="stat">User Lists</h4>
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
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
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
                      <td>{obj.position}</td>
                      <td>{obj.office}</td>
                      <td>{obj.age}</td>
                      <td>{obj.startDate}</td>
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
  );
}

export default Users;
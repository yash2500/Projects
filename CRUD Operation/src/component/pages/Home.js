import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };

  return (
    <div className="container card mt-3 shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Home Page</h1>
      <hr />
      <table class="table">
        <thead>
          <tr className="bg-dark text-light">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className="btn btn-warning me-2" to={`/user/${user.id}`}><i class="fa fa-eye"></i></Link>
                <Link
                  className="btn btn-primary me-2"
                  to={`/user/edit/${user.id}`}
                >
                  <i class='fas fa-edit'></i>
                </Link>
                <button className="btn btn-danger me-2" onClick={() => deleteUser(user.id)} >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

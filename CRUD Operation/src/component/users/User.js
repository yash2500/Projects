import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const {id} = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container py-4 card mt-3 shadow-lg p-3 mb-5 bg-white rounded">
      
      <h1 className="display-4"> User Id: {id}</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item mt-2"><span className="fw-bold text-danger">Name:</span> {user.name}</li>
        <li className="list-group-item mt-2"><span className="fw-bold text-danger">User Name:</span> {user.username}</li>
        <li className="list-group-item mt-2"><span className="fw-bold text-danger">Email:</span> {user.email}</li>
        <li className="list-group-item mt-2"><span className="fw-bold text-danger">Phone:</span> {user.phone}</li>
        <li className="list-group-item mt-2"><span className="fw-bold text-danger">Website:</span> {user.website}</li>
      </ul>
      <hr />
      <Link className="btn btn-danger" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default User;

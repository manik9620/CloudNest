import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { appLogout } from "../../store/slices/authSlice";
import navicon from "../../public/assests/cloud-computing.png";
import "./styles.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(appLogout());
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left-item">
        <img src={navicon} alt="navicon" className="navicon" />
        <h2>Cloud Nest</h2>
      </div>
      <div className="navbar-right-item">
        <Link to="/profile" className="nav-link">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

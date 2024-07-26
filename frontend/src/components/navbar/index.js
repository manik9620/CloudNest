import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { appLogout } from "../../store/slices/authSlice";
import navicon from "../../public/assests/cloud-computing.png"; 
import profileIcon from "../../public/assests/man.png"; 
import "./styles.css";

const Navbar = () => {
  const { isAuthorized } = useSelector((state) => state.auth);



  return (
    <div className="navbar-container">
      <div className="navbar-left-item">
        {isAuthorized ? (
          <Link to="/">
            <img src={navicon} alt="navicon" className="navicon" />
          </Link>
        ) : (
          <img src={navicon} alt="navicon" className="navicon" />
        )}
        <h2>CloudNest</h2>
      </div>
      <div className="navbar-center-item">
        <Link to="/features" className="nav-link">Features</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
      <div className="navbar-right-item">
        {isAuthorized && (
          <Link to="/profile" className="profile-link">
            <img src={profileIcon} alt="profile" className="profile-icon" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

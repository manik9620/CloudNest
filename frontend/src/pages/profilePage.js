import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { appLogout } from "../store/slices/authSlice";
import Navbar from "../components/navbar/index";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthorized } = useSelector((e) => e.auth);

  const handleLogout = () => {
    dispatch(appLogout());
  };

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/login");
    }
  }, [isAuthorized, navigate]);

  return (
    <>
      <Navbar />
      <div className="profile-page-container">
        <div className="profile-content">
          <h1>Profile Page</h1>
          <p>Welcome to your profile!</p>
          <button onClick={handleLogout}>Logout</button>
          {/* Add more profile information here */}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

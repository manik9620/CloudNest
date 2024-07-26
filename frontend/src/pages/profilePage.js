import React from "react";
import Navbar from "../components/navbar/index";
import "./profilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <Navbar />
      <div className="profile-content">
        <h1>Profile Page</h1>
        <p>Welcome to your profile!</p>
        {/* Add more profile information here */}
      </div>
    </div>
  );
};

export default ProfilePage;

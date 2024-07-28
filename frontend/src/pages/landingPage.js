import React from "react";
import { Link } from "react-router-dom";
import navicon from "../public/assests/cloud-computing.png";
import Footer from "../components/footer";
import { toast } from "react-toastify";

const LandingPage = () => {
    const handleSubmit=()=>{
        toast.success("Response Submitted");
    }
  return (
    <div>
      
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={navicon} alt="navicon" className="navicon" />
            <h3>CloudNest</h3>
          </div>
          <ul className="nav-links">
            <li className="objects">
              <a href="#features">Features</a>
            </li>
            <li className="objects">
              <a href="#about">About</a>
            </li>
            <li className="objects">
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link to="/signup">
                <button className="cta-button">Sign Up</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button className="cta-button">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <a href="#C10">
              <button className="cta-button">Get Started</button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2>Features</h2>
          <div className="features">
            <div className="feature">
              <h3>Easy File Management</h3>
              <p>
                Organize your files with ease using our intuitive interface.
              </p>
            </div>
            <div className="feature">
              <h3>Secure Storage</h3>
              <p>
                Keep your files safe and secure with our advanced encryption.
              </p>
            </div>
            <div className="feature">
              <h3>Access Anywhere</h3>
              <p>Access your files from any device, anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 id="C10">About Us</h2>
          <p>
            We are dedicated to providing the best file management solutions to
            help you stay organized and productive.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Us Today</h2>
          <p>Sign up now and start organizing your files better.</p>
          <Link to="/signup">
            <button className="cta-button">Sign Up</button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" onClick={handleSubmit}>Send Message</button>
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you want to style this page separately

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to FreshGuardAI</h1>
        <p>Your go-to solution for AI-powered data predictions and insights.</p>
      </header>
      <div className="home-content">
        <h2>Get Started</h2>
        <p>Upload an image to see FreshGuardAI in action.</p>
        <Link to="/upload" className="home-link">Upload Image</Link>
        <h2>Explore</h2>
        <p>Learn more about what FreshGuardAI can do.</p>
        <Link to="/about" className="home-link">About Us</Link>
      </div>
    </div>
  );
}

export default Home;

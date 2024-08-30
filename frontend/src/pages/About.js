import React from 'react';
import './About.css'; // Assuming you want to style this page separately

function About() {
  return (
    <div className="about-container">
      <h1>About FreshGuardAI</h1>
      <p>FreshGuardAI is an advanced AI-powered application designed to predict and provide insights into various data sets.</p>
      <p>Our mission is to harness the power of artificial intelligence to make data-driven decisions more accessible to everyone.</p>
      <h2>Features</h2>
      <ul>
        <li>Image Analysis</li>
        <li>Real-time Predictions</li>
        <li>Customizable Recommendations</li>
        <li>Secure and Fast Processing</li>
      </ul>
      <h2>Our Team</h2>
      <p>We are a dedicated team of developers, data scientists, and AI enthusiasts committed to bringing cutting-edge technology to your fingertips.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to <a href="mailto:support@freshguardai.com">contact us</a>.</p>
    </div>
  );
}

export default About;

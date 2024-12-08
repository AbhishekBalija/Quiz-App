import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Tech Quiz App!</h1>
      <p className="home-description">
        Test your knowledge in Java, Python, and HTML. Challenge yourself and
        track your progress!
      </p>
      <div className="home-button-container">
        <Link to="/java" className="home-button">
          Start Java Quiz
        </Link>
        <Link to="/python" className="home-button">
          Start Python Quiz
        </Link>
        <Link to="/html" className="home-button">
          Start HTML Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;

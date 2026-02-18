import React from "react";
import { PuffLoader } from "react-spinners";
import '../css/Loader.css';

const Loader = ({ text }) => {
  return (
    <div className="loader-container">
      <PuffLoader
        loading
        size={110}
        color="#365E3A"
        speedMultiplier={1}
        
      />
      <span className="loader-text">{text}</span>
    </div>
  );
};

export default Loader;

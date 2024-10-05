// components/Hamburger.js
import React, { useState } from 'react';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="ham-1"></span>
        <span className="ham-2"></span>
        <span className="ham-3"></span>
      </div>
      {open && (
        <div className="ham-grid">
          <div className="ham-logo"><img src="/Assets/ham-logo.png" alt="Ham logo" /></div>
          <div className="ham-links">
            <a href="/">Home</a>
            <a href="/registration">Registration</a>
            <a href="/ignition">Ignition</a>
            <a href="/gallery">Gallery</a>
            <a href="/sponsors">Sponsors</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;

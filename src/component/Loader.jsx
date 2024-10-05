// components/Loader.js
import React, { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector('.loader');
    loader.addEventListener('click', () => {
      loader.style.display = 'none';
      document.body.style.overflowY = 'scroll';
    });
  }, []);

  return (
    <div className="loader">
      <div className="video-wrapper">
        <video autoPlay loop muted playsInline id="video" width="100%">
          <source src="/Assets/loader.mp4" type="video/mp4" />
        </video>
        <div className="shadow"></div>
      </div>
      <div className="hide">CLICK TO CONTINUE</div>
    </div>
  );
};

export default Loader;

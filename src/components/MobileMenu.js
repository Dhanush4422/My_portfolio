import React from 'react';

const MobileMenu = () => {
  return (
    <div className="mobile-menu show" id="mobileMenu">
      <a href="#home"><i className="fas fa-home"></i></a>
      <a href="#about"><i className="fas fa-user"></i></a>
      <a href="#education"><i className="fas fa-graduation-cap"></i></a>
      <a href="#skills"><i className="fas fa-code"></i></a>
      <a href="#projects"><i className="fas fa-briefcase"></i></a>
      <a href="#contact"><i className="fas fa-envelope"></i></a>
    </div>
  );
};

export default MobileMenu;

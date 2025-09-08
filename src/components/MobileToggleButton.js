
import React from 'react';

const MobileToggleButton = ({ onClick }) => {
  return (
    <button className="mobile-toggle" id="mobileToggle" aria-label="Toggle navigation" onClick={onClick}>
      <i className="fas fa-bars"></i>
    </button>
  );
};

export default MobileToggleButton;

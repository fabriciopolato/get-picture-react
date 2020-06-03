import React, { useState } from "react";

const Image = ({ className, img }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${className} image-container`}>
      <img
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        src={img.url}
        className="image-grid"
        alt="some pic"
      />
    </div>
  );
};

export default Image;

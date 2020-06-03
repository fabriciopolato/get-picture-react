import React, { useState, useContext } from "react";
import { Context } from "../Context";

const Image = ({ className, img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <img src={img.url} className="image-grid" alt="some pic" />
      {isHovered && (
        <>
          <i
            onClick={() => toggleFavorite(img.id)}
            className="ri-heart-line favorite"
          ></i>
          <i className="ri-add-circle-line cart"></i>
        </>
      )}
    </div>
  );
};

export default Image;

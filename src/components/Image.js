import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

const Image = ({ className, img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, addImage } = useContext(Context);

  const handleHoverEnter = () => {
    setIsHovered(true);
  };

  const handleHoverLeave = () => {
    setIsHovered(false);
  };

  const heartIcon = isHovered && !img.isFavorite && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-line favorite"
    ></i>
  );

  const heartIconFilled = isHovered && img.isFavorite && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-fill favorite"
    ></i>
  );

  const cartIcon = isHovered && (
    <i
      onClick={() => {
        addImage(img);
      }}
      className="ri-add-circle-line cart"
    ></i>
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <img src={img.url} className="image-grid" alt="some pic" />
      {heartIcon}
      {heartIconFilled}
      {cartIcon}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;

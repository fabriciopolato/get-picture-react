import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const Image = ({ className, img }) => {
  const { toggleFavorite, addImage, removeImage, cartItems } = useContext(
    Context
  );
  const [isHovered, divRef] = useHover();

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  };

  const cartIcon = () => {
    if (cartItems.some((item) => img.id === item.id)) {
      return (
        <i
          onClick={() => removeImage(img)}
          className="ri-add-circle-fill cart"
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          onClick={() => addImage(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  };

  return (
    <div ref={divRef} className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt="some pic" />
      {heartIcon()}
      {cartIcon()}
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

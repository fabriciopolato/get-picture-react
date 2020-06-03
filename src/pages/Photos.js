import React, { useContext } from "react";
import { Context } from "../Context";
import { getClass } from "../utils/index";
import Image from "../components/Image";

const Photos = () => {
  const { allPhotos } = useContext(Context);
  const images = allPhotos.map((img, index) => (
    <Image key={img.id} img={img} className={getClass(index)} />
  ));

  return <main className="photos">{images}</main>;
};

export default Photos;

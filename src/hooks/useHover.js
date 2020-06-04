import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const enter = () => {
    setIsHovered(true);
  };

  const leave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    ref.current.addEventListener("mouseenter", enter);
    ref.current.addEventListener("mouseleave", leave);

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [isHovered, ref];
};

export default useHover;

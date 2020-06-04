import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [ordered, setOrdered] = useState("Place Order");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
      .then((resp) => {
        setAllPhotos(resp.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addImage = (image) => {
    console.log("addImage");
    if (!cartItems.includes(image)) {
      setCartItems((prevState) => [...prevState, image]);
    }
  };

  const removeImage = (image) => {
    setCartItems((prevState) =>
      prevState.filter((item) => image.id !== item.id)
    );
  };

  const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  };

  const calculateTotal = () => {
    const price = 5.99;
    return (cartItems.length * price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const placeOrder = () => {
    setOrdered("Ordering...");

    setTimeout(() => {
      setCartItems([]);
      setOrdered("Place Order");
    }, 3000);
  };

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addImage,
        removeImage,
        cartItems,
        calculateTotal,
        placeOrder,
        ordered,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };

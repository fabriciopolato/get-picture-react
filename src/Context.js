import React from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export { ContextProvider, Context };

import { StoreProvider } from "./store";
import React from "react";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
};

export default App;

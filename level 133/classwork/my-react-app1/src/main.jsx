import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyContext, MyContextProvider } from "./context/MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/scss/bootstrap.scss";
//import "bootstrap"; Bu import eğer bootstrap statik olarak kullanılacaksa Javascripti etkinleştirmek için kullanılmalıdır dinamik yapıda buna gerek yoktur

const root = ReactDOM.createRoot(document.getElementById("root")); // sanal DOM burada oluşturuluyor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

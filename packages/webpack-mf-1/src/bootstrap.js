import React from "react";
import ReactDOM from "react-dom";
import App from "./app_a";
import SayHelloFromB from "application_b/SayHelloFromB";

console.log("App", App);

ReactDOM.render(
  <>
    <App />
    <SayHelloFromB />
  </>,
  document.getElementById("root")
);

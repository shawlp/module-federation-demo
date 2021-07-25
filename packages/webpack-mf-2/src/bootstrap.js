import React from "react";
import ReactDOM from "react-dom";
import SayHelloFromA from "application_a/SayHelloFromA";

import App from "./app_b";

console.log("SayHelloFromA", SayHelloFromA);

ReactDOM.render(
  <>
    <App />
    <SayHelloFromA />
  </>,
  document.getElementById("root")
);

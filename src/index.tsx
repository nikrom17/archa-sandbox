import * as React from "react";
import { render } from "react-dom";
import Spa from "./spa/spa";

function App() {
  return <Spa />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

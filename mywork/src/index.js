import ReactDOM from "react-dom";
import { App } from "./App";
import React from 'react';

// const app = document.getElementById("app");
// ReactDOM.render(<App />, app);

ReactDOM.unstable_createRoot(document.getElementById("app")).render(<App/>)

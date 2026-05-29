import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "title" }, "Hello React People");

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(heading)


// node packaging excute 


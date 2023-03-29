import React from "react";
import { Route } from "react-router-dom";
import Contact from "./pages/contact";
import Homepage from "./pages/Homepage";

function MyRoute() {
  return (
    <>
      <Route path="/" exact component={Homepage} />
      <Route path="/contact" exact component={Contact} />
    </>
  );
}

export default MyRoute;

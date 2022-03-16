import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Routes, Route } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;

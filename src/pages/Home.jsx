import React from "react";
import Popular from "../components/Popular";
import Veggies from "../components/Veggies";
import { BrowserRouter } from "react-router-dom";
function Home() {
  return (
    <div>
      <Veggies />
      <Popular />
    </div>
  );
}

export default Home;

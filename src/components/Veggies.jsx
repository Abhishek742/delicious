import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Card from "./Card";
import Gradient from "./Gradient";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

function Veggies() {
  const [veggies, setVeggies] = useState([]);
  // useEffect(() => {
  //   console.log(window.innerWidth);
  // }, [window.innerWidth]);
  useEffect(() => {
    setTimeout(getVeggies(), 2000);
  }, []);

  const getVeggies = async () => {
    const check = localStorage.getItem("veggies");
    if (check) {
      setVeggies(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      setVeggies(data.recipes);
    }
  };
  const checkWidth = () => {
    if (window.innerWidth <= 500) return "1";
    else if (window.innerWidth <= 1000) return "2";
    else return "3";
  };
  return (
    <Wrapper>
      <h3>Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: `${checkWidth()}`,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {veggies &&
          veggies.map((recipe) => {
            // console.log(recipe);
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}></img>
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
      </Splide>
    </Wrapper>
  );
}

export default Veggies;

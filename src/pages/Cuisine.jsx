import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "../components/Grid";
import GridCard from "../components/GridCard";
function Cuisine() {
  const params = useParams();

  const [cuisine, setCuisine] = useState([]);
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const cuisineLocal = localStorage.getItem(`${name}`);
    if (cuisineLocal) {
      setCuisine(JSON.parse(cuisineLocal));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}`
      );
      const data = await res.json();
      localStorage.setItem(`${name}`, JSON.stringify(data.results));
      setCuisine(data.results);
    }
  };

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <GridCard key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </GridCard>
        );
      })}
    </Grid>
  );
}

export default Cuisine;

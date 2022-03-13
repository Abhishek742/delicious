import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
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
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;

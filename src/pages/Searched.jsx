import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Grid from "../components/Grid";
import GridCard from "../components/GridCard";
function Searched() {
  const [searched, setSearched] = useState([]);
  const params = useParams();
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${name}`
    );
    const res = await data.json();
    setSearched(res.results);
  };
  return (
    <Grid>
      {searched.map((item) => {
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

export default Searched;

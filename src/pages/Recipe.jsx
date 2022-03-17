import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function Recipe() {
  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  useEffect(() => {
    getDetails(params.id);
  }, [params.id]);

  const getDetails = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const res = await data.json();
    // await console.log(res);
    setDetails(res);
  };

  return (
    <DetailWrapper>
      <div>
        <h2>{details && details.title}</h2>
        <img src={details && details.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" ? (
          <div>
            {details && details.instructions ? (
              <h3
                dangerouslySetInnerHTML={{
                  __html: details && details.instructions,
                }}
              ></h3>
            ) : (
              <h3
                dangerouslySetInnerHTML={{
                  __html: details && details.summary,
                }}
              ></h3>
            )}
          </div>
        ) : (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1rem;
    line-height: 1.65rem;
    font-weight: 500;
  }
  li {
    font-size: 1rem;
    line-height: 1.65rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    width: 300px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  @media (max-width: 500px) {
    padding: 0.5rem 1rem;
    margin-right: 1rem;
  }
`;
const Info = styled.div`
  margin-left: 5rem;
  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 5rem;
  }
`;
export default Recipe;

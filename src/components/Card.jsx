import styled from "styled-components";

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 90%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1000px) {
    p {
      font-size: 1.4rem;
      height: 50%;
    }
  }
  @media (max-width: 500px) {
    p {
      font-size: 1.2rem;
      height: 25%;
    }
  }
`;

export default Card;

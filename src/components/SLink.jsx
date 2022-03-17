import styled from "styled-components";
import { NavLink } from "react-router-dom";
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  // margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
  &:hover {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
  @media (max-width: 820px) {
    width: 4.5rem;
    height: 4.5rem;
    svg {
      font-size: 1.2rem;
      margin-bottom: 4px;
    }
    h4 {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 500px) {
    width: 3.5rem;
    height: 3.5rem;
    svg {
      font-size: 0.8rem;
      margin-bottom: 2px;
    }
    h4 {
      font-size: 0.5rem;
    }
  }
`;

export default SLink;

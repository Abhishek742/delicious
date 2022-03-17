import styled from "styled-components";
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 2rem;
  @media (max-width: 500px) {
    gap: 5vw;
    margin: 1rem 0;
  }
`;
export default List;

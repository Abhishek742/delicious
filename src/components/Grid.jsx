import styled from "styled-components";
import { motion } from "framer-motion";
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

export default Grid;

import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 45vh;
  padding: 2rem 2rem;
  text-align: center;
  color: white;
  @media (min-width: 1300px) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 5.5rem;
  }
`;
export const Description = styled.div`
  flex: 2;
  /* padding-right: 5rem; */
  z-index: 2;
  h1 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Circle = styled.div`
  border-radius: 50%;
  min-width: 3rem;
  height: 3rem;
  background: #353535;
`;

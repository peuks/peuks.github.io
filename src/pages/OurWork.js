import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import apollo from "../img/apollo.jpg";

import inframe2 from "../img/inframe.webp";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#EEEEEE" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Apollo Immo Rent Online</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/apollo-immo">
          <Hide>
            <motion.img variants={photoAnim} src={apollo} alt="apollo" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Rawg.io Api</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="test/work/ignite">
          <img
            src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt="raw"
          />
        </Link>
      </Movie>
      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Inframe</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/inframe">
          <img src={inframe2} alt="inframe" />
        </Link>
      </Movie>

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem 5rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    /* background: #3db2ff; */
    background: ${(props) => props.theme.lightTheme.clr__primary__secondary};
    margin-bottom: 3rem;
  }
  a {
    display: grid;
    place-items: center;
    width: 70%;
    @media (max-width: 1300px) {
      width: 85%;
    }

    margin: 0 auto;
    div {
      width: 100%;
    }
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    justify-content: center;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  /* background: #fffebf; */
  background: ${(props) => props.theme.lightTheme.clr__secondary};
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  /* background: #ff8efb; */
  background: ${(props) => props.theme.lightTheme.clr__primary__lighter};
`;
const Frame3 = styled(Frame1)`
  /* background: #8ed2ff; */
  background: ${(props) => props.theme.lightTheme.clr__primary__secondary};
`;
const Frame4 = styled(Frame1)`
  /* background: #8effa0; */
  background: ${(props) => props.theme.lightTheme.clr__primary};
`;

export default OurWork;

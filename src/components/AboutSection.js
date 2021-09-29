import React from "react";
// import home1 from "../img/david.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import david from "../img/david1.jpg";
import Github from "./ui/icons/Github";
import CheckLink from "./ui/icons/CheckLink";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnim}>
              Developpeur <span>FullStack</span> & Mentor
            </motion.h1>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Php & React dev who loves design, build and sometimes rescue
          applications. Have a project, idea or problem you would need to
          discuss ?
        </motion.p>
        <Follow classname="about__links">
          <a href="https://github.com/peuks">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/davidvanmak/">
            <CheckLink />
          </a>
        </Follow>
        <Link to="/work">
          <Button variants={fade} label="See my Portfolio" />
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={david}
          alt="David VANMAK's Picture"
        />
      </Image>
      <Wave />
    </About>
  );
};

const Follow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1300px) {
    justify-content: left;
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.lightTheme.clr__secondary};
    font-size: 2.8rem;
  }
`;

export default AboutSection;

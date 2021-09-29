import React from "react";
// import home1 from "../img/david.jpg";
import { About, Description, Image as ImageToStyle, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import david from "../img/david1.jpg";
import Github from "./ui/icons/Github";
import styled from "styled-components";
import Linkedin from "./ui/icons/Linkedin";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnim}>
              Developer <span>FullStack</span> & Mentor
            </motion.h1>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Php and React developer who loves to design, build and sometimes come
          to the rescue for your application. Have an idea or an idea you would
          need to discuss about ?
        </motion.p>
        <Follow classname="about__links">
          <a href="https://github.com/peuks">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/davidvanmak/">
            <Linkedin />
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

const Image = styled(ImageToStyle)`
  img {
    object-position: right top;
  }
`;
export default AboutSection;

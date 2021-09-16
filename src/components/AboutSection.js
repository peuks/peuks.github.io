import React from "react";
import home1 from "../img/david.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Developpeur <span>FullStack</span> & Mentor
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Front and Back Env Developpeur , Open To Work
        </motion.p>
        <motion.button variants={fade}>See my Work</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;

import React from "react";
// import home1 from "../img/david.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

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
          Php & React dev who loves design, build and sometimes rescue
          applications. Have a project, idea or problem you would need to
          discuss ?
        </motion.p>
        <Link to="/work">
          <Button variants={fade} label="See my Portfolio" />
        </Link>
      </Description>
      <Image>
        {/* <motion.img variants={photoAnim} src={home1} alt="guy with a camera" /> */}
        <motion.img
          variants={photoAnim}
          src="https://dummyimage.com/840x840.png"
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;

import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutUsStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </AboutUsStyle>
  );
};
const AboutUsStyle = styled(motion.div)`
  background: ${(props) => props.theme.lightTheme.clr__primary__lighter};
`;

export default AboutUs;

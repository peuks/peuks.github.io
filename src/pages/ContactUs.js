import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

// After
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  background: ${(props) => props.theme.lightTheme.clr__secondary};
  }
`;

const ContactUs = () => {
  return (
    <>
      <GlobalStyle />
      <ContactStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        // style={{ background: "#fff" }}
      >
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2 className="contact__title">Send Us A Message</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2 className="contact__title">Send an email.</h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              <Circle />
              <h2 className="contact__title">Social Media</h2>
            </Social>
          </Hide>
        </div>
      </ContactStyle>
    </>
  );
};

const ContactStyle = styled(motion.div)`
  background: ${(props) => props.theme.lightTheme.clr__secondary};

  padding: 5rem 10rem;
  color: #353535;
  /* min-height: 90vh;
   */
  .contact__title {
    font-size: 3rem;
  }
  @media (max-width: 1300px) {
    font-size: 4rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  min-width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    font-size: 4em;
  }
`;

export default ContactUs;

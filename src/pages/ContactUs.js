import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import Mailto from "../components/ui/Mailto";
import Linkedin from "../components/ui/icons/Linkedin";
import Github from "../components/ui/icons/Github";
import Email from "../components/ui/icons/Email";
import Message from "../components/ui/icons/Message";
import { Link } from "react-router-dom";
import Wave from "../components/Wave";
const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Wave />

      <div className="wrapper">
        <Title>
          <Hide>
            <motion.h1 variants={titleAnim}>Get in touch.</motion.h1>
          </Hide>
        </Title>
        <div>
          <Hide>
            <Social variants={titleAnim}>
              {/* <Circle /> */}
              <Link to="/contact/message">
                <h2 className="contact__title">
                  <Message /> Send A Message
                </h2>
              </Link>
            </Social>
          </Hide>

          <Hide>
            <Social variants={titleAnim}>
              {/* <Circle /> */}
              <h2 className="contact__title">
                <Mailto
                  email="vanmakdavid/lwg@gmail.com"
                  subject=""
                  body="Hello world!"
                >
                  <Email /> Email
                </Mailto>
              </h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              {/* <Circle /> */}
              <h2 className="contact__title">
                <a href="https://www.linkedin.com/in/davidvanmak/">
                  <Linkedin /> Linkedin <br />
                </a>
              </h2>
            </Social>
            <Social variants={titleAnim}>
              <h2 className="contact__title">
                <a href="https://github.com/peuks">
                  <Github /> Github
                </a>
              </h2>
            </Social>
          </Hide>
        </div>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  .wrapper {
    z-index: 2;
  }
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
  background: rgb(255, 255, 255);
  opacity: 1;
  transform: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
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
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;

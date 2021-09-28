import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

// After
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import Mailto from "../components/ui/Mailto";
import Linkedin from "../components/ui/icons/Linkedin";
import Github from "../components/ui/icons/Github";
import Email from "../components/ui/icons/Email";
import Message from "../components/ui/icons/Message";

//
// get our fontawesome imports

//
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
                <Linkedin /> Linkedin <br />
              </h2>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim}>
              {/* <Circle /> */}
              <h2 className="contact__title">
                <a href="https://github.com/peuks">
                  <Github /> Github
                </a>
              </h2>
            </Social>
          </Hide>
        </div>
      </ContactStyle>
    </>
  );
};

const ContactStyle = styled(motion.div)`
  background: ${(props) => props.theme.lightTheme.clr__secondary};

  color: #353535;

  padding: 2rem 2rem;
  @media (min-width: 1300px) {
    padding: 2.5rem 5.5rem;
  }
`;
const Title = styled.div`
  margin: 0;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
  @media (max-width: 960px) {
    margin-top: 1rem;
    margin-bottom: 4rem;
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
  a {
    text-decoration: none;
    font-size: unset;
    color: unset;
  }
  @media (max-width: 576px) {
    h2 {
      font-size: 2.8em;
    }
  }
`;

export default ContactUs;

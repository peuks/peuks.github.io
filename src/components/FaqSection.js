import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import Button from "./ui/Button";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade, scrollReveal } from "../animation";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        About <span>Me</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle faqline="true" title="Who Am I ?">
          <div className="answer">
            <p>
              Fulls Stack React / Php developer living in Strasbourg. I have an
              appetite for optimized and well-structured code.
            </p>
            <p>
              Passionate about dance, outdoor activities and vintage cars. I
              work on ambitious projects with positive people.
            </p>
            <Link to="/contact">
              <Button variants={fade} label="How about working together ?" />
            </Link>
          </div>
        </Toggle>
        <Toggle faqline="true" title="My Background">
          <div className="answer">
            <p>[ 2021 ] Elan Formation Strasbourg </p>
            <p>[ 2020 ] BootCamp Le Wagon Marseille</p>
            <p>
              [ 2017 ] Bachelor's degree in economics and management Strasbourg
            </p>
          </div>
        </Toggle>

        <Toggle faqline="true" title="Skills">
          <div className="answer">
            <div className="answer__wrapper">
              <div classname="anwser__section">
                <h4>Technicals Skills</h4>
                <p>Php : Symfony 5.x</p>
                <p>Javascript : React, Redux Vue, Form Validation, Axios</p>
                <p>Docker : Dockerize an app</p>
                <p>Linux : Script Bash, Archilinux User</p>
              </div>
              <div classname="anwser__section">
                <h4>Softs Skills</h4>
                <p>Problem solving and creativity</p>
                <p>Collaboration and teamwork</p>
                <p>Critical thinking skills</p>
                <p>Ability to learn, adapt and grow</p>
              </div>
            </div>
          </div>
        </Toggle>
        {/* <Toggle title="My Clients">
          <div className="answer">My Menties</div>
        </Toggle> */}
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    &__wrapper {
      display: flex;
      /* width: 100%; */
      justify-content: space-between;
      flex-wrap: wrap;
      /* padding on the first element */
      div:nth-child(1) {
        padding-bottom: 3.5em;
        margin-bottom: 2.5em;
      }
      div {
        margin: 0 auto;
        @media (min-width: 1300px) {
          margin: inherit;
        }
      }
    }

    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

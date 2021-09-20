import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout, motion } from "framer-motion";
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
        <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Experiences">
          <div className="answer">
            <p>
              Je suis un développeur Full Stack habitant à Strasbourg. J'ai une
              appétence pour le code optimisé et bien structuré.
              <p />
              <p>
                Passionnée de danse, d'activités en plein air et de voitures
                anciennes. Déterminée et passionnée , je travaille sur des
                projets ambitieux avec des personnes positives.
              </p>
              <Link to="/contact">
                <motion.button variants={fade}>
                  Et si l'on travaillez ensemble ?
                </motion.button>
              </Link>
            </p>
          </div>
        </Toggle>
        <Toggle title="Skills">
          <div className="answer">
            <p>Php : Symfony 5.2.9</p>
            <p>Javascript : React, vue</p>
            <p>Docker : Dockerisation d'un environnement de travail</p>
            <p>Linux : Script Bash, Archlinux Linux</p>
          </div>
        </Toggle>

        <Toggle title="Clients">
          <div className="answer">
            <p>Apollo Immo [2020-2021] [Symfony, React, Docker]</p>
            <p>Vassy Like The Wind: [2020] [Wordpress]</p>
            <p>Wendling SARL : [2014 - 2021] [Dolibarr,Linux,BackUp ] </p>
          </div>
        </Toggle>
        <Toggle title="Links">
          <div className="answer">
            <Link to="/contact">
              <motion.button variants={fade}>Linkedin</motion.button>
            </Link>
            <Link to="/contact">
              <motion.button variants={fade}>Github</motion.button>
            </Link>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
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
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

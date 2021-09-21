import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
//Styles
import { About, Description } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      classname="services"
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description classname="services">
        <h2>
          My key to <span>success</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Team Work</h3>
            </div>
            <p>
              Pair Programming
              <br /> Consulting Expertise
              <br /> Colaboration
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Quality</h3>
            </div>
            <p>
              Clean Code
              <br /> Quality Control Proces
              <br /> Quality Report
            </p>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Technical Efficiency</h3>
            </div>
            <p>
              Versability
              <br /> Lengthy Experience
              <br /> Scallability
            </p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    /* width: 70%; */
    /* padding: 2rem 0rem 4rem 0rem; */
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5em;
  @media (min-width: 600px) {
    justify-content: space-between;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  padding: 1em;
  margin: 0 auto;
  .icon {
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      padding-bottom: 1.5em;
    }
    h3 {
      background: white;
      color: black;
      padding: 1rem;
      width: 100%;
      text-align: center;
    }
  }
`;

export default ServicesSection;

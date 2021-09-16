import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Mes<span> services</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Accompagnement tout au long de la mission</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Formation aux différentes technologies utilisées</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Contrôle qualité</h3>
            </div>
            <p>
              Réalisation de différents tests, correction des bugs éventuels.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt="camera" src={home2} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 1300px) {
    justify-content: initial;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;

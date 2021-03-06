import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import testLogo from "../img/Corbel.png";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Link id="logo" to="/">
        <img src={testLogo} alt="fireSpot" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Portfolio</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width:
                pathname === "/contact" || pathname === "/contact/message"
                  ? "50%"
                  : "0%",
            }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  height: max(8vh, 6rem);
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: ${(props) => props.theme.lightTheme.clr__primary};

  position: sticky;
  top: 0;
  z-index: 100;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    img {
      width: 64px;
      height: 64px;
    }
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 960px) {
    #logo {
      display: none;
    }
    flex-direction: column;
    padding: 0rem 0rem;
    #logo {
      /* display: inline-block; */
      /* margin: 1rem; */
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: ${(props) => props.theme.lightTheme.clr__primary__secondary};
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 20%;
  @media (min-width: 960px) {
    left: 60%;
  }
`;

export default Nav;

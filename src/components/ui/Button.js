import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = ({ label }) => {
  // Prevent error if props are not provided
  label = label ?? "N/A";
  return <ButtonStyle className="button shadow">{label}</ButtonStyle>;
};

const ButtonStyle = styled(motion.button)`
  &.button {
    border-radius: 5px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

    font-weight: bold;
    font-size: 1.1rem;
    letter-spacing: 2.28px;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid
      ${(props) => props.theme.lightTheme.clr__primary__secondary};
    background: transparent;
    color: ${(props) => props.theme.lightTheme.clr__secondary};
    transition: all 0.5s ease;
    &:hover {
      background-color: ${(props) =>
        props.theme.lightTheme.clr__primary__secondary};
      color: ${(props) => props.theme.lightTheme.clr__secondary};
    }
  }
`;
export default Button;

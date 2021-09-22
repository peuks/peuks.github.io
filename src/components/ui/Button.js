import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const button = ({ label }) => {
  // Prevent error if props are not provided
  label = label ?? "N/A";
  return <Button className="button">{label}</Button>;
};

const Button = styled(motion.button)`
  &.button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid
      ${(props) => props.theme.lightTheme.clr__primary__secondary};
    background: transparent;
    color: ${(props) => props.theme.lightTheme.clr__secondary};
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    &:hover {
      background-color: ${(props) =>
        props.theme.lightTheme.clr__primary__secondary};
      color: ${(props) => props.theme.lightTheme.clr__secondary};
    }
  }
`;
export default button;

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

/**
 *
 * @param {*} type
 * @param {*} id
 * @param {*} name
 * @param {*} placeholder
 * @returns
 */
const TextField = ({ type, id, name, placeholder, label, ...props }) => {
  return !(type === "textarea") ? (
    <TextFieldStyle className="text-field">
      <label for={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </TextFieldStyle>
  ) : (
    <TextFieldStyle className="text-field">
      <label for={id}>{label}</label>
      <textarea id={id} name={name} placeholder={placeholder} {...props} />
    </TextFieldStyle>
  );
};
const TextFieldStyle = styled(motion.div)`
  &.text-field {
    display: flex;
    flex-direction: column;
    label {
      color: ${(props) => props.theme.lightTheme.clr__primary__secondary};
      letter-spacing: 0.00938em;
    }
    input {
      margin: 1.25em 0;
      background: rgba(0, 0, 0, 0);
      border: none;
      border-bottom: 1px solid
        ${(props) => props.theme.lightTheme.clr__primary__secondary};
      color: ${(props) => props.theme.lightTheme.clr__secondary};
      font-size: 1.4rem;
      padding: 4px 0 5px;
      padding: 16.5px 8px;
      height: 2.4375em;
      ::placeholder {
        color: ${(props) => props.theme.lightTheme.clr__secondary};
        font-size: 1.4rem;
        letter-spacing: 2px;
      }
    }
    *:focus {
      outline: none;
    }
  }
  textarea {
    padding: 16.5px 8px;
    margin: 1.25em 0;
    font-size: 1.4rem;
    background: rgba(0, 0, 0, 0);
    border: 1px solid
      ${(props) => props.theme.lightTheme.clr__primary__secondary};
    color: ${(props) => props.theme.lightTheme.clr__secondary};

    &::placeholder {
      color: ${(props) => props.theme.lightTheme.clr__secondary};
    }
  }
`;

export default TextField;

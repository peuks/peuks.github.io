import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const TextArea = ({ type, id, name, placeholder, label, ...props }) => {
  return (
    <TextFieldStyle className="text-area">
      <label for={id}>{label}</label>
      <textarea
        type="textarea"
        id={id}
        name={name}
        placeholder={placeholder}
        {...props}
      />
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
    textarea {
      margin: 1.25em 0;
      background: rgba(0, 0, 0, 0);
      border: none;
      border-bottom: 1px solid
        ${(props) => props.theme.lightTheme.clr__primary__secondary};
      color: ${(props) => props.theme.lightTheme.clr__secondary};

      padding: 4px 0 5px;
      padding: 16.5px 8px;
      height: 2.4375em;
      ::placeholder {
        color: ${(props) => props.theme.lightTheme.clr__secondary};
        font-size: 1em;
        letter-spacing: 2px;
      }
    }
    *:focus {
      outline: none;
    }
  }
`;
export default TextArea;

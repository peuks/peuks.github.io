import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { pageAnimation, titleAnim } from "../animation";
import ButtonStyle from "../components/ui/Button";
import TextField from "../components/ui/form/TextField";

const ContactForm = () => {
  return (
    <FormStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="form"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <form>
        <TextField
          type="text"
          id="fname"
          name="name"
          placeholder="Johne Doe"
          label="Name"
        />

        <TextField
          type="text"
          id="email"
          name="email"
          placeholder="recrute@me"
          label="Email"
        />
        <TextField
          type="textarea"
          id="subject"
          name="subject"
          placeholder="Write something.."
          label="What is it about ?"
          rows="5"
          cols="33"
        />

        <ButtonStyle type="submit" value="Submit" label="Submit" />
      </form>
    </FormStyle>
  );
};

const FormStyle = styled(motion.section)`
  height: 100%;
  padding: 2rem 2rem;
  @media (min-width: 960px) {
    width: clamp(45ch, 50%, 75ch);
    margin: 0 auto;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /* Select What is It About Text Area */
  div:nth-child(4) {
    margin-top: 3rem;
  }
  button {
    margin-top: 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 3rem;
  color: ${(props) => props.theme.lightTheme.clr__secondary};

  margin-top: 2rem;
  @media (min-width: 1300px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default ContactForm;

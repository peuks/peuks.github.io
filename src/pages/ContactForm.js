import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { pageAnimation, titleAnim, formAnim } from "../animation";
import Button from "../components/ui/Button";
import TextField from "../components/ui/form/TextField";

const ContactForm = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents default refresh by the browser
  //   const formData = new FormData(document.querySelector("form"));
  //   for (var pair of formData.entries()) {
  //     console.log(pair[0] + ": " + pair[1]);
  //   }
  // };
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
      <form
        // onSubmit={handleSubmit}
        name="myForm"
        id="form"
        action="https://formsubmit.co/vanmakdavid.lwg@gmail.com"
        method="POST"
      >
        <Hide>
          <TextField
            type="hidden"
            name="_next"
            value="https://peuks.github.io/"
            variants={formAnim}
          />
        </Hide>
        <Hide>
          <TextField
            type="text"
            id="fname"
            name="name"
            placeholder="Indiana Jones"
            label="Name"
            variants={formAnim}
            required
          />
        </Hide>

        <Hide>
          <TextField
            type="email"
            id="email"
            name="email"
            placeholder="recrute@me"
            label="Email"
            required
            variants={formAnim}
          />
        </Hide>
        <Hide>
          <TextField
            type="textarea"
            id="subject"
            name="message"
            placeholder="Write something.."
            label="What is it about ?"
            rows="5"
            cols="33"
            required
            variants={formAnim}
          />
        </Hide>

        <Hide>
          <Button type="submit" value="Submit" label="Submit" variants={formAnim} />
        </Hide>
      </form>
    </FormStyle>
  );
};

const FormStyle = styled(motion.section)`
  height: 100%;
  padding: 1rem 2rem;
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
  margin-bottom: 2rem;
  margin-top: 0rem;
  color: ${(props) => props.theme.lightTheme.clr__secondary};

  @media (min-width: 760) {
    margin-bottom: 3rem;
    margin-top: 2rem;
  }
  @media (min-width: 1300px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default ContactForm;

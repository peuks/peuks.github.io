import React from "react";

const sendMail = () => {
  const mailto = "mailto:mail@gmail.com?subject=Test subject&body=Body content";
  window.location.href = mailto;
};
export default sendMail;

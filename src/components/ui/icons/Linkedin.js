import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Linkedin = ({ ...props }) => {
  return <FontAwesomeIcon className="shadow" icon={faLinkedin} {...props} />;
};

export default Linkedin;

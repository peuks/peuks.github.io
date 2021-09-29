import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
const Linkedin = ({ ...props }) => {
  return <FontAwesomeIcon className="shadow" icon={faCommentDots} {...props} />;
};

export default Linkedin;

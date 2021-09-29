import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
const Github = ({ props }) => {
  return (
    <FontAwesomeIcon className="shadow" icon={faGithubSquare} {...props} />
  );
};

export default Github;

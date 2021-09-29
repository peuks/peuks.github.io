import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Email = ({ ...props }) => {
  return <FontAwesomeIcon className="shadow" icon={faEnvelope} {...props} />;
};

export default Email;

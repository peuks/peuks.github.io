import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

const CheckLink = ({ ...props }) => {
  return <FontAwesomeIcon icon={faExternalLinkSquareAlt} {...props} />;
};

export default CheckLink;

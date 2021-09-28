import { motion } from "framer-motion";
import React, { useState } from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
const Toggle = ({ children, title, faqline = false, variant = "h4" }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      {variant === "h4" ? (
        <motion.h4 layout>{title}</motion.h4>
      ) : (
        <motion.h2 layout>{title}</motion.h2>
      )}

      {toggle ? children : ""}

      {faqline === "true" && <div className="faq-line" />}
    </motion.div>
  );
};

export default Toggle;

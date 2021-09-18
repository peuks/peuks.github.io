import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 300);
  }, [pathname]);
  return null;
};

export default ScrollTop;

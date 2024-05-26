import { useLocation } from "react-router-dom";

const ShowNF = ({ children }) => {
  const location = useLocation();
  const excludedPaths = ["/", "/home", "/custom", "/about-us", "/contact-us"];

  const shouldShowNavbar = excludedPaths.includes(location.pathname);

  return shouldShowNavbar ? children : null;
};

export default ShowNF;

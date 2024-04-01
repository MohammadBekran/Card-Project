import { Link as ReactRouterDomLink } from "react-router-dom";
import { handleScroll } from "../../../handleScroll";
import PropTypes from "prop-types";

const Link = ({ to, className, ...rest }) => {
  return (
    <ReactRouterDomLink
      to={to}
      className={className}
      onClick={handleScroll}
      {...rest}
    />
  );
};

Link.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
};

export { Link };

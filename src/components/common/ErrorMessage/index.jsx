import PropTypes from "prop-types";

const ErrorMessage = ({ children }) => {
  if (children) return null;

  return <p className="bg-red-500">{children}</p>;
};

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

export { ErrorMessage };

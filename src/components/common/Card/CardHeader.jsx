import PropTypes from "prop-types";

const CardHeader = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center h-[200px] bg-dark text-dark transition-all duration-150 group-hover:bg-gradient-to-r group-hover:from-[#00d2ff] group-hover:to-[#3a7bd5] group-hover:text-white">
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string,
};

export { CardHeader };

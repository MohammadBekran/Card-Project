import PropTypes from "prop-types";

import { Link } from "../Link";

const CardBody = ({ description, id }) => {
  return (
    <div className="bg-white w-full flex flex-col justify-center h-[0px] opacity-0 group-hover:h-[200px]  group-hover:opacity-[1] transition-all duration-300 text-[#5a5a5a] px-5">
      <p>{description}</p>
      <Link
        to={`/cards/${id}`}
        className="flex justify-center items-center w-[34%] py-2 mt-3 border-dashed border-[2px]  text-[15px]"
      >
        Read More
      </Link>
    </div>
  );
};

CardBody.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number,
};

export { CardBody };

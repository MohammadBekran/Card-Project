import PropTypes from "prop-types";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

const Card = ({ title, description, id }) => {
  return (
    <div className="w-full lg:w-[25%] flex flex-col justify-center items-center gap-3 ">
      <div className="w-[90%] lg:w-full shadow-cardShadow group">
        <CardHeader title={title} />
        <CardBody description={description} id={id} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export { Card };

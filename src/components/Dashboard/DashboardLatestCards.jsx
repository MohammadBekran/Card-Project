import PropTypes from "prop-types";

import { useDarkModeSelector } from "../../redux/darkMode";

import { Link } from "../common/Link";
import { Skeleton } from "../common/Skeleton";

const DashboardLatestCards = ({ latestCards }) => {
  const darkMode = useDarkModeSelector();

  return (
    <div className="border-[1px] border-borderPrimary p-6 rounded-md">
      <h2 className="font-bold text-xl">Latest Cards</h2>
      <div className="mt-1">
        {latestCards ? (
          latestCards.map((latestCard) => (
            <div
              key={latestCard.id}
              className="border-b-[1px] border-borderPrimary last:border-0 mt-5 pb-[17px]"
            >
              <Link
                to={`/dashboard/cards/${latestCard.id}`}
                className="font-bold"
              >
                {latestCard.title}
              </Link>
              <p className="text-md text-[#5d5d5d] dark:text-dark truncate lg:w-[250px]">
                {latestCard.shortDescription}
              </p>
            </div>
          ))
        ) : (
          <Skeleton
            count={5}
            width="100%"
            height={65}
            className="mt-5"
            baseColor={darkMode && "#0000007e"}
            highlightColor={darkMode && "#0000003b"}
          />
        )}
      </div>
    </div>
  );
};

DashboardLatestCards.propTypes = {
  latestCards: PropTypes.array,
};

export { DashboardLatestCards };

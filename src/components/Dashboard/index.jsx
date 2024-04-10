import { useEffect, useState } from "react";

import { getCardList } from "../../core/services/api/getCardList.api";

import { AllInclusiveTwoTone } from "@mui/icons-material";
import { DashboardChart } from "./DashboardChart";
import { DashboardLatestCards } from "./DashboardLatestCards";

const Dashboard = () => {
  const [cards, setCards] = useState();
  const [latestCards, setLatestCards] = useState();

  const fetchCards = async () => {
    const response = await getCardList();

    const getLatestCards = response.slice(-5);

    setLatestCards(getLatestCards);
    setCards(response);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="w-full lg:flex lg:gap-5 mt-10">
      <div className="lg:w-[60%]">
        <div className="border-[1px] border-borderPrimary px-5 py-7 rounded-md mb-5 flex items-center gap-3">
          <AllInclusiveTwoTone className="w-[30px] h-[30px]" />
          <span className="text-xl font-bold">
            You created {cards?.length} Cards in your website!
          </span>
        </div>
        <DashboardChart cards={cards} />
      </div>
      <div className="lg:w-[37%] mt-6 lg:mt-0">
        <DashboardLatestCards latestCards={latestCards} />
      </div>
    </div>
  );
};

export { Dashboard };

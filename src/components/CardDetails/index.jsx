import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

import { useDarkModeSelector } from "../../redux/darkMode";

import { getCardDetail } from "../../core/services/api/getCardDetail.api";

import { Skeleton } from "../common/Skeleton";
import { DescriptionSkeleton } from "./DescriptionSkeleton";

const CardDetails = () => {
  const [card, setCard] = useState({});

  const { cardId } = useParams();

  const darkMode = useDarkModeSelector();

  useEffect(() => {
    const fetchCard = async () => {
      const response = await getCardDetail(cardId);

      setCard(response);
    };

    fetchCard();
  }, [cardId]);
  return (
    <div className="w-[78.2%] mx-auto mt-14">
      <div className="lg:w-[80%] mx-auto px-5 py-2 border-[1px] border-solid border-borderPrimary rounded-md">
        <div className="w-full">
          <div className="flex justify-center">
            {card.title ? (
              <h2 className="w-fit font-bold text-3xl text-center border-b-[3px] border-solid border-[#2313ae]">
                {card.title}
              </h2>
            ) : (
              <Skeleton
                width={300}
                height={20}
                baseColor={darkMode && "#0000007e"}
                highlightColor={darkMode && "#0000003b"}
              />
            )}
          </div>
          <div className="prose max-w-full mt-6 text-justify">
            {card.mainDescription ? (
              <Markdown className="dark:text-dark">
                {card.mainDescription}
              </Markdown>
            ) : (
              <>
                <DescriptionSkeleton />
                <DescriptionSkeleton />
                <DescriptionSkeleton />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardDetails };

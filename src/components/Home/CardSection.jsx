import { useEffect, useState } from "react";

import { useDarkModeSelector } from "../../redux/darkMode";

import { getCardList } from "../../core/services/api/getCardList.api";

import { Card } from "../common/Card";
import { Skeleton } from "../common/Skeleton";

const CardSection = () => {
  const [cards, setCards] = useState();

  const darkMode = useDarkModeSelector();

  const fetchCards = async () => {
    const response = await getCardList();

    setCards(response);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <div className="flex gap-7 justify-center flex-wrap w-full">
        {cards ? (
          cards.map((card) => {
            const { id, title, shortDescription } = card;

            return (
              <Card
                key={id}
                title={title}
                description={shortDescription}
                id={id}
              />
            );
          })
        ) : (
          <Skeleton
            className="w-[90%] lg:w-[343px]"
            containerClassName="w-full flex gap-2 justify-center items-center flex-wrap"
            height={200}
            count={6}
            baseColor={darkMode && "#0000007e"}
            highlightColor={darkMode && "#0000003b"}
          />
        )}
      </div>
    </>
  );
};

export { CardSection };

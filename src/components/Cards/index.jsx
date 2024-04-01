import axios from "axios";
import { useEffect, useState } from "react";

import { CardsTable } from "./CardsTable";
import { Link } from "../common/Link";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState();

  const fetchCards = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://65fc4e419fc4425c652fb699.mockapi.io/card"
      );

      setCards(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="mt-6">
      <div className="flex flex-col lg:flex-row justify-between items-center pr-5">
        <div>
          <h2 className="font-bold text-2xl dark:text-dark">Cards Page</h2>
          <p className="text-[#585858] text-sm dark:text-dark">
            In this page you can see all the cards and edit them and delete
            them.
          </p>
        </div>
        <div className="w-full lg:w-auto mt-10 lg:mt-0">
          <Link
            to="/dashboard/createCard"
            className="bg-primary text-buttonPrimary dark:bg-gray-900 dark:text-dark dark:shadow-darkShadow px-6 py-3 rounded-md"
          >
            Create Card
          </Link>
        </div>
      </div>
      <div className="w-[98%] mt-8">
        <CardsTable cards={cards} loading={loading} />
      </div>
    </div>
  );
};

export { Cards };

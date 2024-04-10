import axios from "axios";
import { useEffect, useState } from "react";

import { getCardList } from "../../core/services/api/getCardList.api";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "../common/Link";
import { toast } from "../common/toast";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const response = await getCardList();

      setCards(response);
      setLoading(false);
    };
    fetchCards();
  }, []);

  const handleDelete = async (id) => {
    try {
      await toast.promise(
        axios.delete(`https://65fc4e419fc4425c652fb699.mockapi.io/card/${id}`),
        {
          loading: "This course is being deleted ...",
          success: "This course deleted successfully.",
          error: "Something went wrong!",
        }
      );

      const filteredCards = cards.filter((card) => {
        return card.id !== id;
      });

      setCards(filteredCards);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "title",
      headerName: "Title",
      renderCell: ({ row: { title } }) => (
        <Tooltip title={title}>{title}</Tooltip>
      ),
      width: 220,
    },
    {
      field: "shortDescription",
      headerName: "Short Description",
      renderCell: ({ row: { shortDescription } }) => (
        <Tooltip title={shortDescription}>{shortDescription}</Tooltip>
      ),
      width: 500,
    },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: ({ row: { id } }) => (
        <Link
          to={`/dashboard/cards/${id}`}
          className="bg-primary text-buttonPrimary dark:bg-gray-900 dark:text-dark dark:shadow-darkShadow w-20 h-10 rounded-md flex gap-1 justify-center items-center"
        >
          <EditIcon />
          Edit
        </Link>
      ),
      cellClassName: "flex justify-center items-center",
    },
    {
      field: "delete",
      headerName: "Delete",
      cellAlign: "right",
      renderCell: ({ row: { id } }) => (
        <button
          className="bg-red-500 px-2 h-[40px] flex items-center rounded-full"
          onClick={() => handleDelete(id)}
        >
          <DeleteIcon className="fill-white" />
        </button>
      ),
      cellClassName: "flex justify-center items-center",
    },
  ];

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
        <DataGrid
          columns={columns}
          rows={cards}
          loading={loading}
          classes={{
            cell: "dark:text-dark",
            columnHeader: "dark:bg-dark dark:text-dark w-full",
            overlayWrapper: "min-h-[100px] dark:bg-dark",
          }}
        />
      </div>
    </div>
  );
};

export { Cards };

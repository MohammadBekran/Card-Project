import axios from "axios";
import PropTypes from "prop-types";

import { toast } from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "../common/Link";

const CardsTable = ({ cards, loading }) => {
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
      window.location.reload();
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
  );
};

CardsTable.propTypes = {
  cards: PropTypes.array,
  loading: PropTypes.bool,
};

export { CardsTable };

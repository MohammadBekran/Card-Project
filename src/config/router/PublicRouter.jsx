import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../../DashboardLayout";
import { Layout } from "../../Layout";
import { CardDetailsPage } from "../../screens/CardDetails";
import { CardEditPage } from "../../screens/CardEdit";
import { CardsPage } from "../../screens/Cards";
import { CreateCardPage } from "../../screens/CreateCard";
import { DashboardPage } from "../../screens/Dashboard";
import { HomePage } from "../../screens/Home";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/cards/:cardId",
        element: <CardDetailsPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/createCard",
        element: <CreateCardPage />,
      },
      {
        path: "/dashboard/cards",
        element: <CardsPage />,
      },
      {
        path: "/dashboard/cards/:id",
        element: <CardEditPage />,
      },
    ],
  },
]);

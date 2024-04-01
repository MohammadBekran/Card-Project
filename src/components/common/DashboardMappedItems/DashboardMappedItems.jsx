import PropTypes from "prop-types";

import { CreateOutlined, Dashboard } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "../Link";

const DashboardMappedItems = ({ itemsClassName }) => {
  const dashboardItems = [
    { icon: <Dashboard />, label: "Dashboard", href: "/dashboard" },
    { icon: <HomeIcon />, label: "Cards", href: "/dashboard/cards" },
    {
      icon: <CreateOutlined />,
      label: "Create Card",
      href: "/dashboard/createCard",
    },
  ];

  return dashboardItems.map((item) => (
    <li
      key={item.label}
      className={`hover:bg-dark transition-colors duration-300 p-2 rounded-md px-6 ${itemsClassName}`}
    >
      <Link to={item.href} className="flex items-center gap-3">
        {item.icon}
        {item.label}
      </Link>
    </li>
  ));
};

DashboardMappedItems.propTypes = {
  itemsClassName: PropTypes.string,
};

export { DashboardMappedItems };

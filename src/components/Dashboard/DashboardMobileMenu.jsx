import { useState } from "react";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { DashboardMappedItems } from "../common/DashboardMappedItems/DashboardMappedItems";
import { DarkModeButton } from "../common/Header/DarkModeButton";
import { Link } from "../common/Link";

const DashboardMobileMenu = () => {
  const [open, setOpen] = useState();
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div className="lg:hidden px-4 mt-5">
      <Button
        className="bg-primary text-buttonPrimary px-5 flex gap-1"
        onClick={() => toggleDrawer(true)}
      >
        Open Menu
      </Button>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        classes={{ paper: "w-[50%] dark:bg-dark dark:text-dark" }}
      >
        <div className="mt-5 flex flex-col">
          <div className="flex justify-between items-center px-5 mb-3">
            <Link to="/dashboard" className="text-xl font-bold">
              Card Project
            </Link>
            <div className="darkModeWrapper m-0">
              <DarkModeButton />
            </div>
          </div>
          <ul>
            <span className="px-6 text-sm font-bold">Cards</span>
            <DashboardMappedItems itemsClassName="hover:bg-transparent" />
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export { DashboardMobileMenu };

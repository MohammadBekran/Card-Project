import { Outlet } from "react-router-dom";
import { DashboardMobileMenu } from "./components/Dashboard/DashboardMobileMenu";
import { DashboardSidebar } from "./components/Dashboard/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="w-full mx-auto lg:flex lg:gap-4 h-full relative">
      <DashboardSidebar />
      <DashboardMobileMenu />
      <div className="lg:w-[80%] px-4 lg:px-0 relative lg:left-[20%] lg:pl-4 mb-2 dark:bg-dark">
        <Outlet />
      </div>
    </div>
  );
};

export { DashboardLayout };

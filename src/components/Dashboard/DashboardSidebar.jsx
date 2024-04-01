import { DashboardMappedItems } from "../common/DashboardMappedItems/DashboardMappedItems";
import { DarkModeButton } from "../common/Header/DarkModeButton";
import { Link } from "../common/Link";

const DashboardSidebar = () => {
  return (
    <div className="hidden lg:block bg-gray-900 h-full lg:w-[20%] pt-4 text-dark fixed left-0 z-10">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-center items-center mb-8">
            <Link to="/" className="text-center text-xl font-bold">
              Card Project
            </Link>
            <div className="ml-20">
              <DarkModeButton />
            </div>
          </div>
          <div>
            <ul>
              <DashboardMappedItems />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardSidebar };

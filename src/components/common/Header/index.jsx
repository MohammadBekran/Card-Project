import { Link } from "../Link";

import { DarkModeButton } from "./DarkModeButton";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6  mx-auto lg:w-[83%]">
      <div>
        <div className="darkModeWrapper">
          <DarkModeButton />
        </div>
      </div>
      <div className="ml-10 lg:ml-20">
        <Link to="/" className="dark:text-dark text-xl lg:text-2xl font-bold">
          Card Project
        </Link>
      </div>
      <div>
        <Link
          to="/dashboard"
          className="bg-primary text-buttonPrimary dark:bg-gray-900 dark:text-dark dark:shadow-darkShadow px-4 lg:px-6 py-2 lg:py-3 rounded-md font-semibold text-[15px] lg:text-[16px]"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export { Header };

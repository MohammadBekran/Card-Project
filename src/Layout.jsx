import { Outlet } from "react-router-dom";
import { Header } from "./components/common/Header";

const Layout = () => {
  return (
    <div className="dark:bg-darkBackground py-2">
      <Header />
      <div>
        <Outlet />
      </div>
      <footer className="flex justify-center items-center mt-10">
        <p className="dark:text-dark font-bold">Created By Mohammad Bekran</p>
      </footer>
    </div>
  );
};

export { Layout };

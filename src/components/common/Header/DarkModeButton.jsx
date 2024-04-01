import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { onDarkModeChange, useDarkModeSelector } from "../../../redux/darkMode";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const DarkModeButton = () => {
  const darkMode = useDarkModeSelector();
  const dispatch = useDispatch();

  const darkModeChange = (value) => {
    dispatch(onDarkModeChange(value));
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkMode === true) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return darkMode ? (
    <LightModeIcon
      className="text-[30px] cursor-pointer"
      onClick={() => darkModeChange(false)}
    />
  ) : (
    <DarkModeIcon
      className="text-[30px] cursor-pointer"
      onClick={() => darkModeChange(true)}
    />
  );
};

export { DarkModeButton };

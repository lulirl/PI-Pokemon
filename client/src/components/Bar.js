import React from "react";
import SearchBar from "./SearchBar";
import ToggleMode from "./ToggleMode";
import s from "./Bar.module.css";
import { useSelector } from "react-redux";

function Bar() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className={darkMode ? s.containerDark : s.containerLight}>
      <SearchBar />
      <ToggleMode />
    </div>
  );
}

export default Bar;

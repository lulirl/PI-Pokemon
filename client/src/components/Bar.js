import React from "react";
import SearchBar from "./SearchBar";
import Order from "./Order";
import s from "./Bar.module.css";
function Bar() {
  return (
    <div className={s.container}>
      <SearchBar />
    </div>
  );
}

export default Bar;

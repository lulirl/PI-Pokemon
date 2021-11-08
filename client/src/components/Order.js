import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  filterByCreator,
  filterType,
  sortAttack,
  sortPoke,
  searchTypes,
  resetPoke,
} from "../actions";

import s from "../components/Order.module.css";

export default function Order() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchTypes());
  }, [dispatch]);
  const types = useSelector((state) => state.types);
  function onSelectChange(e) {
    dispatch(sortPoke(e.target.value));
  }
  function onChange(e) {
    dispatch(sortAttack(e.target.value));
  }
  function handleFilter(e) {
    dispatch(filterType(e.target.value));
  }
  function onHandleSub(e) {
    dispatch(filterByCreator(e.target.value));
  }
  function onHandleClick(e) {
    dispatch(resetPoke());
  }
  const box = {
    fontSize: "18px",
    color: "white",
    backgroundColor: "#bdb2ff",
    borderRadius: "50px",
    outline: "none",
    fontFamily: "sans-serif",
    fontWeight: "600",
    alignItems: "center",
  };
  const shadow = {
    alignItems: "center",
    color: "black",
    boxShadow: "1px 1px 1px",
  };
  return (
    <div>
      <div className={s.filterContainer}>
        <button style={{ ...box, ...shadow }} onClick={onHandleClick}>
          Reset
        </button>
        <select
          className={s.name}
          style={{ ...box, ...shadow }}
          name="select"
          onChange={onSelectChange}
        >
          <option selected disabled>
            Sort by name
          </option>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
        </select>

        <select
          className={s.name}
          style={{ ...box, ...shadow }}
          name="select"
          onChange={onChange}
        >
          <option selected disabled>
            Sort by Attack
          </option>
          <option value="high">High-Low</option>
          <option value="low">Low-High</option>
        </select>

        <select
          className={s.name}
          style={{ ...box, ...shadow }}
          name="select"
          onChange={handleFilter}
        >
          <option selected disabled>
            Filter by Type
          </option>
          {types &&
            types.map((t) => (
              <option style={{ ...box, ...shadow }} value={t}>
                {t}
              </option>
            ))}
        </select>

        <select
          className={s.name}
          style={{ ...box, ...shadow }}
          onChange={onHandleSub}
        >
          <option selected disabled>
            Old & New
          </option>
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="old">Old</option>
        </select>
      </div>
    </div>
  );
}

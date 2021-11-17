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
  goToPageOne,
} from "../actions";

import s from "../components/Order.module.css";

export default function Order() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchTypes());
  }, [dispatch]);
  const newOrCreated = useSelector((state) => state.newOrCreated);
  const typeOrder = useSelector((state) => state.typeOrder);
  const attackOrder = useSelector((state) => state.attackOrder);
  const nameOrder = useSelector((state) => state.nameOrder);
  const types = useSelector((state) => state.types);

  function onSelectChange(e) {
    dispatch(sortPoke(e.target.value));
  }
  function onChange(e) {
    dispatch(sortAttack(e.target.value));
  }

  function handleFilter(e) {
    dispatch(goToPageOne(1));
    dispatch(filterType(e.target.value));
  }
  function onHandleSub(e) {
    dispatch(filterByCreator(e.target.value));
  }
  function onHandleClick(e) {
    dispatch(resetPoke());
  }

  return (
    <div>
      <div className={s.filterContainer}>
        <button
          className={darkMode ? s.boxDark : s.box}
          onClick={onHandleClick}
        >
          Reset
        </button>
        <select
          className={darkMode ? s.boxDark : s.box}
          name="select"
          onChange={onSelectChange}
          value={nameOrder}
        >
          <option value="default">Sort by name</option>
          <option value="ascendente">A-Z</option>
          <option value="descendente">Z-A</option>
        </select>

        <select
          className={darkMode ? s.boxDark : s.box}
          name="select"
          onChange={onChange}
          value={attackOrder}
        >
          <option value="default">Sort by Attack</option>
          <option value="high">High-Low</option>
          <option value="low">Low-High</option>
        </select>

        <select
          className={darkMode ? s.boxDark : s.box}
          name="select"
          onChange={handleFilter}
          value={typeOrder}
        >
          <option value="default">Filter by Type</option>
          {types &&
            types.map((t, i) => {
              return (
                <option
                  key={i}
                  className={darkMode ? s.boxDark : s.box}
                  value={t}
                >
                  {t}
                </option>
              );
            })}
          {/* {types &&
            types.map((t) => (
              <option style={{ ...box, ...shadow }} value={t}>
                {t}
              </option>
            ))} */}
        </select>

        <select
          className={darkMode ? s.boxDark : s.box}
          onChange={onHandleSub}
          value={newOrCreated}
        >
          <option value="default">Old & New</option>
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="old">Old</option>
        </select>
      </div>
    </div>
  );
}

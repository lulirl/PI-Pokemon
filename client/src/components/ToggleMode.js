import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../actions/index";

function ToggleMode() {
  const darkMode = useSelector((state) => state.darkMode);
  let dispatch = useDispatch();
  return (
    <IconButton onClick={() => dispatch(toggleMode())}>
      Mode {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}
export default ToggleMode;

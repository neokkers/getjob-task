import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme, selectTheme } from "../_redux/slices/themeSlice";
import TogglerWidget from "../views/modules/TogglerWidget";
import { lightTheme, darkTheme } from "../views/themes";

export const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <TogglerWidget
      toggled={theme.name === "dark"}
      onToggle={() => dispatch(setTheme(darkTheme))}
      onUntoggle={() => dispatch(setTheme(lightTheme))}
    />
  );
};

export default ThemeToggler;

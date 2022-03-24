import { KeyboardEvent, MouseEvent } from "react";

type ToggleDrawerState = { right: boolean };

export const toggleDrawer = (
  open: boolean,
  state: ToggleDrawerState,
  setState: (arg: ToggleDrawerState) => void
) => (event: KeyboardEvent | MouseEvent) => {
  if (
    event &&
    event.type === "keydown" &&
    ((event as KeyboardEvent).key === "Tab" ||
      (event as KeyboardEvent).key === "Shift")
  ) {
    return;
  }

  setState({ ...state, right: open });
};

import { KeyboardEvent, MouseEvent } from "react";

export const toggleDrawer =
  (
    open: boolean,
    state: { right: boolean },
    setState: (arg0: any) => void
  ) =>
  (event: KeyboardEvent | MouseEvent) => {
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

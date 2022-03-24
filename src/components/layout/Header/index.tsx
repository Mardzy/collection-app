import React, { FC, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  Typography,
  Toolbar
} from "@mui/material";
import { Cancel as CancelIcon, Menu as MenuIcon } from "@mui/icons-material";

import { AppBar, DrawerHeader, HideOnScroll, MenuList } from "./components";

import { routes } from "router";
import { LinkAsText } from "components";
import { toggleDrawer } from "components/utils";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement | undefined;
}

const Header: FC<Props> = (props) => {
  const [state, setState] = useState<{ right: boolean }>({
    right: false
  });

  return (
    <>
      <HideOnScroll {...props}>
        <Box flexGrow={1}>
          <AppBar sx={{ top: "auto", bottom: 0, bgcolor: "black" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <LinkAsText color="white" to={routes.home.to}>
                  Inventory Tracker
                </LinkAsText>
              </Typography>
              <Button sx={{ mr: [3, 8] }} color="inherit">
                Login
              </Button>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: [0, 0, 2] }}
                onClick={toggleDrawer(true, state, setState)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </HideOnScroll>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer(false, state, setState)}
        onOpen={toggleDrawer(true, state, setState)}
      >
        <MenuList closeDrawer={toggleDrawer(false, state, setState)} />
        <DrawerHeader>
          <IconButton onClick={toggleDrawer(false, state, setState)}>
            <CancelIcon />
          </IconButton>
        </DrawerHeader>
      </SwipeableDrawer>
    </>
  );
};

export default Header;

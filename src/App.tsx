import React, { FC, useEffect } from "react";
import { Container, CssBaseline } from "@mui/material";

import "@styles/index.scss";

import Routes from "@router";

import { Header, ScrollToTop } from "@components";
import { useAppDispatch } from "@hooks";
import { getUser } from "@slices";

/**
 * @todo clean up get user when login is implemented
 * @constructor
 */
const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser("c8a57299-82ea-4b35-be52-31d1eaa5f4b2"));
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ paddingTop: "3vh" }}>
        <div id="back-to-top-anchor" />
        <CssBaseline />
        <ScrollToTop />
        <Routes />
      </Container>
    </>
  );
};

export default App;

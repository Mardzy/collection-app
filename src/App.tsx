import React, { FC } from "react";
import { Container, CssBaseline } from "@mui/material";

import "@styles/index.scss";

import Routes from "@router";

import { Header, ScrollToTop } from "@components";

const App: FC = () => (
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

export default App;

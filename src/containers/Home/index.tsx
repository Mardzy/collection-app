import React from "react";

import { Typography } from "@mui/material";
import { Flex } from "components";

const Home = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    height="100vh"
    width="100%"
    flexDirection="column"
  >
    <Typography variant="h1">Hello World</Typography>
  </Flex>
);

export default Home;

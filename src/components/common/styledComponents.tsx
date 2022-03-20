import { Link } from "react-router-dom";
import styled from "@mui/styled-engine";

export const LinkAsText = styled(Link)(({ color }) => ({
  textDecoration: "none",
  color,
}));

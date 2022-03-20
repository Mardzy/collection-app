import { ElementType, ReactNode } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

interface FlexProps {
  alignContent?: string | string[] | undefined;
  alignItems?: string | string[] | undefined;
  bgcolor?: string | string[] | undefined;
  children?: ReactNode;
  component?: ElementType<ReactNode> | undefined;
  flexDirection?: string | string[] | undefined;
  height?: string | string[] | undefined;
  justifyContent?: string | string[] | undefined;
  width?: string | string[] | number | number[] | undefined;
}

const Flex = styled(Box, {
  shouldForwardProp: (prop) => prop !== "sx",
  name: "Flex",
  slot: "Root",
})<FlexProps>(
  ({ alignContent, alignItems, bgcolor, height, justifyContent, width }) => ({
    display: "flex",
    alignContent,
    alignItems,
    height,
    width,
    bgcolor,
    justifyContent,
  })
);

export default Flex;

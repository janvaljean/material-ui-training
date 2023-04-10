import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const LessonStack = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 4, md: 6 }}
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  );
};

export default LessonStack;

import React from "react";
import Grid from "@mui/material/Grid";
const LessonGrid = () => {
  return (
    <>
      <Grid container>
        <Grid xs={8}> 8 meter</Grid>
        <Grid xs={4}>4 meter</Grid>
      </Grid>
      <Grid container>
        <Grid xs={12} md={6}> 8 meter</Grid>
        <Grid xs={4} md={2}>4 meter</Grid>
      </Grid>
    </>
  );
};

export default LessonGrid;

import React from 'react'
import Box from "@mui/material/Box";

const LessonBox = () => {
  return (
    <Box
    sx={{
        backgroundColor: "primary.main",
        width:"100px",
        height:"100px",
        color: "white",
        padding: "20px",
        "&:hover":{
            backgroundColor: "error.dark",
        }
    }}>
      LessonBox
    </Box>
  )
}

export default LessonBox

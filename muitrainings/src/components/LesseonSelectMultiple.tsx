import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const LesseonSelectMultiple = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div>
      <Box width="250px" sx={{marginTop:"220px"}}>
        <TextField
          SelectProps={{
            multiple: true,
          }}
          label="Select a Programming Language"
          select
          fullWidth
          value={value}
          onChange={(e) =>
            setValue(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
        >
          <MenuItem value="Java">Java</MenuItem>
          <MenuItem value="JS">JS</MenuItem>
          <MenuItem value="Python">Python</MenuItem>
          <MenuItem value="C#">C#'</MenuItem>
        </TextField>
      </Box>
    </div>
  );
};

export default LesseonSelectMultiple;

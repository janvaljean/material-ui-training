import { Box, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const LessonSelect = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setValue(value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          value={value}
          fullWidth
          onChange={handleChange}
          label="Country"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value="Turkey">Turkey</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Germany">Germany</MenuItem>
          <MenuItem value="France">France</MenuItem>
        </Select>
        
      </FormControl>
    </Box>
  );
};

export default LessonSelect;

import React from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const LessonTextfield = () => {
  const [text, setText] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name"></TextField>
        <TextField label="Outlined secondary" color="secondary" focused />
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
          fullWidth
        />
        <TextField
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
          value={text}
          onChange={(e) => setText(e.target.value)}
          helperText={!text ? "enter a value" : "dont share your text"}
        />
      </Stack>
      <Stack>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DeleteIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Stack>
    </Stack>
  );
};

export default LessonTextfield;

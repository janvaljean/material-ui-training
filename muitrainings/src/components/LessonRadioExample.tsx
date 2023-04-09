import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import FormHelperText from "@mui/material/FormHelperText";

import React, { useState } from "react";

const LessonRadioExample = () => {
  const [value, setValue] = useState("");
  const [helpertext, sethelperText] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    console.log(value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === "FB") {
      sethelperText("Big Team");
      setError(false)
    } else if (value === "GS") {
      sethelperText("Looser");
      setError(false);
    } else if (value === "TS") {
      sethelperText("Looser");
      setError(false);
    } else if (value === "other") {
      sethelperText("Looser");
      setError(false);
    } else {
      sethelperText("please choose a team");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ color:"orange" }} error={error}>
        <FormLabel id="demo-radio-buttons-group-label">Teams</FormLabel>
        <RadioGroup
          onChange={handleChange}
          defaultValue="Team"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="GS" control={<Radio />} label="GS" />
          <FormControlLabel value="FB" control={<Radio />} label="FB" />
          <FormControlLabel value="TS" control={<Radio />} label="TS" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormHelperText>{helpertext}</FormHelperText>

        <Button type="submit" variant="outlined" color="success" size="large">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default LessonRadioExample;

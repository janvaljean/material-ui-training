import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

const LessonCheckBox = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [knowlegde, setKnowlegde] = useState<string[]>([]);

  const handleKnowlegdeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const index = knowlegde.indexOf(value);
    if (index == -1) {
      setKnowlegde([...knowlegde, value]);
    } else {
      setKnowlegde(knowlegde.filter((item) => item !== value));
    }
  };
  console.log(isAccept);
  console.log(knowlegde)
  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>University</FormLabel>
          <FormGroup row>
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="TU Darmstad"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Goethe Universität"
            />
            <FormControlLabel control={<Checkbox />} label="MIT" />
            <FormControlLabel control={<Checkbox />} label="Oxford" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>University</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setIsAccept(e.target.checked)}
                />
              }
              label="I accept all the terms"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Goethe Universität"
            />
            <FormControlLabel disabled control={<Checkbox />} label="MIT" />
            <FormControlLabel control={<Checkbox />} label="Oxford" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Frontend Program Language</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="react"
              control={
                <Checkbox
                  checked={knowlegde.includes("react")}
                  onChange={handleKnowlegdeChange}
                />
              }
              label="React Js"
            />
            <FormControlLabel
              value="angular"
              control={
                <Checkbox
                  checked={knowlegde.includes("angular")}
                  onChange={handleKnowlegdeChange}
                />
              }
              label="Angular"
            />
            <FormControlLabel
              value="vue"
              control={
                <Checkbox
                  checked={knowlegde.includes("vue")}
                  onChange={handleKnowlegdeChange}
                />
              }
              label="Vue Js"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LessonCheckBox;

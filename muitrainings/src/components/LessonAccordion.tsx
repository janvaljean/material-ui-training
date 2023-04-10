import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LessonAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
console.log(expanded);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(isExpanded);
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div>
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>first Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates eveniet provident fuga possimus quod voluptatem impedit
          neque quia, earum perferendis illo expedita veritatis, omnis excepturi
          delectus dolor asperiores a.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>second Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates eveniet provident fuga possimus quod voluptatem impedit
          neque quia, earum perferendis illo expedita veritatis, omnis excepturi
          delectus dolor asperiores a.
        </AccordionDetails>
      </Accordion> */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>first Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates eveniet provident fuga possimus quod voluptatem impedit
          neque quia, earum perferendis illo expedita veritatis, omnis excepturi
          delectus dolor asperiores a.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>second Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates eveniet provident fuga possimus quod voluptatem impedit
          neque quia, earum perferendis illo expedita veritatis, omnis excepturi
          delectus dolor asperiores a.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default LessonAccordion;

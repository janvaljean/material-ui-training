import React from "react";
import Typography from "@mui/material/Typography";

const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dignissimos dolorem laboriosam natus sunt error, reiciendis dolore
        mollitia hic at sapiente deleniti voluptate est earum velit eum dolorum
        ipsam fuga suscipit!
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
        praesentium sunt ipsam debitis corrupti iure error odit pariatur
        suscipit consequatur tempore, aut quae provident. Eos tempora voluptatum
        ipsum numquam a.
      </Typography>
      <Typography variant="h1">H1 Component</Typography>
      <Typography variant="h2">H2 Component</Typography>
      <Typography variant="h3">H3 Component</Typography>
      <Typography variant="h4">H4 Component</Typography>
      <Typography variant="h1" component="h4">
        H1 Component
      </Typography>
      <Typography variant="h5" align="right">
        Right
      </Typography>
      <Typography variant="h6" align="left">
        left
      </Typography>
      
      
    </div>
  );
};

export default LessonTypography;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AppsIcon from "@mui/icons-material/Apps";
import { useState } from "react";
const LessonAppbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openControl = Boolean(anchorEl);
  console.log(openControl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Header
        </Typography>
        <Stack direction="row" sx={{ marginLeft: "auto" }}>
          <Button sx={{ color: "white" }}>Products</Button>
          <Button sx={{ color: "white" }}>Pricing</Button>
          <Button sx={{ color: "white" }}>Blog</Button>
          <Button onClick={handleClick} sx={{ color: "white" }}>
            About Us
          </Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Login</MenuItem>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default LessonAppbar;

import React from "react";
import { Box, Drawer, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "@emotion/styled";
import Profile from "./Profile";

// Styling
const drawerStyle = {
  top: 15,
  left: 20,
  height: "95%",
  width: "29%",
  boxShadow: "none",
  minWidth: "300px",
  minHeight: "95%",
  overflow: "hidden",
};

const Header = styled(Box)`
  display: flex;
  height: 110px;
  background: #008069;
  color: #ffffff;
  align-items: flex-end;
  & > svg,
  & > p {
    padding: 15px;
    font-weight: 600;
  }
`;

const Component = styled(Box)`
  background: #f0f2f5;
  height: 81%;
`;

// Component
const InfoDrawer = ({ open, setOpen }) => {
  // Props: props.open, props.setOpen OR object destructuring mean capture open and setOpen props from object

  //   states and callback functions
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      hideBackdrop
      style={{ zIndex: "1500" }}
    >
      <Header>
        <ArrowBackIcon
          onClick={() => setOpen(false)}
          style={{ cursor: "pointer" }}
        />
        <Typography>Profile</Typography>
      </Header>

      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;

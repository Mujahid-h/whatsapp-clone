import { Box } from "@mui/material";
import React, { useState } from "react";
import MenuHeader from "./MenuHeader";
import Search from "./Search";
import Conversations from "./Conversations";

const Menu = () => {
  // states
  const [text, setText] = useState("");

  return (
    <div>
      <Box>
        <MenuHeader />
        <Search setText={setText} />
        <Conversations text={text} />
      </Box>
    </div>
  );
};

export default Menu;

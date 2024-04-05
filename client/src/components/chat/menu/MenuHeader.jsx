import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { AccountContext } from "../../../Context/AccountProvider";
import styled from "@emotion/styled";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MorevertMenu from "./MorevertMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

// Styling
const Component = styled(Box)`
  height: 40px;
  background: #f0f2f5;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin: 2px;
    padding: 8px;
    color: #54656f;
    cursor: pointer;
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: 20,
  cursor: "pointer",
});

const MenuHeader = () => {
  // states
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Component>
      <Image
        src={account.picture}
        alt="dp"
        onClick={() => setOpenDrawer(true)}
      />
      <Wrapper>
        <ChatOutlinedIcon />
        <MorevertMenu setOpenDrawer={setOpenDrawer} />
      </Wrapper>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
      {/* {open and setOpen} are the arguements which are passing as props from the component */}
    </Component>
  );
};

export default MenuHeader;

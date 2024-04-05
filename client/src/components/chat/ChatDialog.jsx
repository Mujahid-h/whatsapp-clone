import { Box, Dialog } from "@mui/material";
import React from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./chatting/EmptyChat";
import styled from "@emotion/styled";
import ChatBox from "./chatting/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";

// Styling
const styledObject = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
  boxShadow: "none",
  margin: "20px",
  borderRadius: "0",
};

const Component = styled(Box)`
  display: flex;
`;

const LeftMenu = styled(Box)`
  width: 30%;
  min-width: 300px;
  height: 100%;
`;

const RightChats = styled(Box)`
  width: 70%;
  min-width: 350px;
  height: 100%;
  border-left: 1px solid #ced0d1;
`;

const ChatDialog = () => {
  // states
  const { person } = useContext(AccountContext);

  return (
    <>
      <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: styledObject }}>
        <Component>
          <LeftMenu>
            <Menu />
          </LeftMenu>

          <RightChats>
            {/* <EmptyChat />
            <ChatBox /> */}
            {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
          </RightChats>
        </Component>
      </Dialog>
    </>
  );
};

export default ChatDialog;

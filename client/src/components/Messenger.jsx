import React, { useContext } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import styled from "@emotion/styled";
import LoginDialog from "./auth/LoginDialog";
import { AccountContext } from "../Context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

// Styling
const Component = styled(Box)`
  height: 150vh;
  background: #dfdfdd;
  width: 100vw;
`;

const LoginHeader = styled(AppBar)`
  height: 200px;
  background: #00a884;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background: #00a884;
  box-shadow: none;
`;

// Component
const Messenger = () => {
  // states
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar />
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar />
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;

import { Box, Typography } from "@mui/material";
import { MoreVert, Search } from "@mui/icons-material";
import React, { useContext } from "react";
import styled from "@emotion/styled";
import { AccountContext } from "../../../Context/AccountProvider";

// Styling
const Component = styled(Box)`
  height: 40px;
  background: #f0f2f5;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: 20,
  cursor: "pointer",
  objectFit: "cover",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
  font-size: 14px;
  opacity: 0.8;
`;
const Status = styled(Typography)`
  margin-left: 12px !important;
  margin-top: 0px !important;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
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

const ChatHeader = ({ person }) => {
  // states
  const { activeUsers } = useContext(AccountContext);

  return (
    <Component>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Component>
  );
};

export default ChatHeader;

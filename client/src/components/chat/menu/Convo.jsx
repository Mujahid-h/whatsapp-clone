import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import { setConversation, getConversation } from "../../../service/Api";
import { formatDate } from "../../../utils/commonUtils";

// Stylig
const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 8px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 40,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Text = styled(Typography)`
  font-size: 14px;
  color: #111b21;
  padding-top: 3px;
`;

const Container = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  font-size: 10px;
  margin-left: auto;
  margin-top: 5px;
  color: #00000099;
  margin-right: 20px;
`;

const Message = styled(Typography)`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

const Convo = ({ user }) => {
  // states and callback functions
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);

  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });

      setMessage({ text: data?.message, timeStamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };
  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>

      <Box style={{ width: "100%" }}>
        <Container>
          <Text>{user.name}</Text>
          {message?.text && (
            <Timestamp>{formatDate(message?.timeStamp)}</Timestamp>
          )}
        </Container>
        <Box>
          <Message>
            {message?.text?.includes("localhost") ? "media" : message?.text}
          </Message>
        </Box>
      </Box>
    </Component>
  );
};

export default Convo;

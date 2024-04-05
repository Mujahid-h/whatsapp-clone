import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { downloadMedia, formatDate } from "../../../utils/commonUtils";
import { AccountContext } from "../../../Context/AccountProvider";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import { iconPDF } from "../../../assets/data";

// styling
const Own = styled(Box)`
  background: #dcf8c6;
  width: fit-content;
  max-width: 60%;
  word-break: break-word;
  padding: 5px;
  display: flex;
  border-radius: 8px;
  //   margin: 5px;
  margin-left: auto;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  width: fit-content;
  max-width: 60%;
  word-break: break-word;
  padding: 5px;
  display: flex;
  border-radius: 10px;
  //   margin: 5px;
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #000000;
  padding: 0px 25px 0px 5px;
`;

const Time = styled(Typography)`
  font-size: 9px;
  color: #919191;
  margin-top: auto;
  word-break: keep-all;
`;

const Message = ({ message }) => {
  // states
  const { account } = useContext(AccountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <Own>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Own>
      ) : (
        <Wrapper>
          {message.type === "file" ? (
            <ImageMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Wrapper>
      )}
    </>
  );
};

const ImageMessage = ({ message }) => {
  return (
    <Box style={{ position: "relative" }}>
      {message?.text?.includes(".pdf") || message?.text?.includes(".txt") ? (
        <Box style={{ display: "flex", alignItems: "center" }}>
          <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
          <Typography style={{ fontSize: 14 }}>
            {message.text.split("-").pop()}
          </Typography>
        </Box>
      ) : (
        <img
          style={{ width: 200, height: "100%", objectFit: "cover" }}
          src={message.text}
          alt={message.text}
        />
      )}
      <Time style={{ position: "absolute", bottom: 0, right: 0 }}>
        <GetAppRoundedIcon
          onClick={(e) => downloadMedia(e, message.text)}
          style={{
            marginRight: 10,
            border: "1px solid grey",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          fontSize="small"
        />
        {formatDate(message.createdAt)}
      </Time>
    </Box>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};

export default Message;

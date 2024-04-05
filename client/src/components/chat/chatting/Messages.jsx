import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useContext, useEffect, useState, useRef } from "react";
import Footer from "./Footer";
import { AccountContext } from "../../../Context/AccountProvider";
import { getMessages, newMessage } from "../../../service/Api";
import Message from "./Message";

// Styling
const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 40%;
  opacity: 0.8;
`;

const Component = styled(Box)`
  height: 76vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  // states and callback functions
  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);

  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [incomingMessage, setIncomingMessage] = useState(null);

  const componentRef = useRef(null); // Ref for the container element

  const scrollToBottom = () => {
    if (componentRef.current) {
      componentRef.current.scrollTop = componentRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessages(conversation?._id);
      setMessages(data);
      scrollToBottom(); // Scroll to bottom when messages are updated
    };

    conversation?._id && getMessageDetails();
    scrollToBottom(); // Scroll to bottom when the component mounts
  }, [conversation._id, person._id, newMessageFlag]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};

      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          text: value,
          type: "text",
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          text: image,
          type: "file",
        };
      }

      await newMessage(message);

      socket.current.emit("sendMessage", message);

      setValue("");
      setFile("");
      setImage("");
      setNewMessageFlag((prev) => !prev);
      scrollToBottom(); // Scroll to bottom after sending a new message
    }
  };

  return (
    <Wrapper>
      <Component ref={componentRef}>
        {messages &&
          messages.map((message) => (
            <Container key={message._id} ref={componentRef}>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};

export default Messages;

import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { emptyChatImage } from "../../../assets/data";
import styled from "@emotion/styled";

// Styling

const Component = styled(Box)`
  background: #f0f2f5;
  height: 100vh;
  text-align: center;
  padding: 30px 0;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;
const Image = styled("img")({
  width: 400,
  marginTop: 70,
});

const Title = styled(Typography)`
  font-size: 32px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  margin: 25px 0px 10px 0px;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  color: #667781;
`;

const StyledDivider = styled(Divider)`
  margin: 30px 0;
  opacity: 0.6;
`;

const EmptyChat = () => {
  return (
    <>
      <Component>
        <Container>
          <Image src={emptyChatImage} alt="image" />
          <Title>WhatsApp Web</Title>
          <SubTitle>
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </SubTitle>
          <StyledDivider />
        </Container>
      </Component>
    </>
  );
};

export default EmptyChat;

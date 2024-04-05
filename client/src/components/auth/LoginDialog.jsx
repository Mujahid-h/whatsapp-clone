import { Box, Dialog, List, ListItem, Typography } from "@mui/material";
import React, { useContext } from "react";
import { qrCodeImage } from "../../assets/data";
import styled from "@emotion/styled";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../Context/AccountProvider";
import { addUser } from "../../service/Api";

// Styling
const styledObject = {
  height: "90%",
  width: "70%",
  marginTop: "10%",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
};

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 4%;
  box-sizing: border-box;
`;

const QrCode = styled("img")({
  width: "200px",
});

const Title = styled(Typography)`
  font-size: 26px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const StyledList = styled(List)`
  & > li {
    font-size: 16px;
    color: #3B4A54s;
    font-family: inherit;
  }
`;

// Component
const LoginDialog = () => {
  // states and callback functions
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decode = jwtDecode(res.credential);
    setAccount(decode);
    await addUser(decode);
  };

  const onLoginError = (res) => {
    console.log("Login Failed", res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: styledObject }} hideBackdrop={true}>
      <Container>
        <Box>
          <Title>Use Whatsapp on your computer</Title>
          <StyledList>
            <ListItem>1. Open Whatsapp on your phone</ListItem>
            <ListItem>
              2. Tap <strong>&nbsp; Menu &nbsp;</strong> on Android or
              <strong>&nbsp; Settings &nbsp;</strong> on iphone
            </ListItem>
            <ListItem>
              3. Tap <strong>&nbsp; Linked Device &nbsp;</strong> and{" "}
              <strong>&nbsp; Link a device &nbsp;</strong>
            </ListItem>
            <ListItem>
              4. Point your phone at this screen to capture the QR code
            </ListItem>
          </StyledList>
        </Box>

        <Box style={{ position: "relative" }}>
          <QrCode src={qrCodeImage} alt="" />
          <Box
            style={{
              position: "absolute",
              top: "40%",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Container>
    </Dialog>
  );
};

export default LoginDialog;

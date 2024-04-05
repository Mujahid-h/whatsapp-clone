import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { AccountContext } from "../../Context/AccountProvider";
import styled from "@emotion/styled";

// Styling
const ImageConainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 140,
  borderRadius: "50%",
  padding: "25px 0px",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 8px 30px 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0, 08);
  & :first-child {
    font-size: 13px;
    color: #008069;
    font-weight: 200;
  }
  & :last-child {
    color: #4a4a4a;
    margin: 8px 0;
  }
`;

const Description = styled(Box)`
  padding: 15px 20px 20px 30px;
  & > p {
    color: #8096a0;
    font-size: 13px;
  }
`;

// Component
const Profile = () => {
  // states
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageConainer>
        <Image src={account.picture} alt="dp" />
      </ImageConainer>

      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>

      <Description>
        <Typography>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </Description>

      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! Sleep! Code! Repeat!</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;

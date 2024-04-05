import { Box, InputBase } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { uploadFile } from "../../../service/Api";

// Styling
const Component = styled(Box)`
  display: flex;
  align-items: center;
  background: #f0f2f5;
  height: 40px;
  padding: 10px 16px;
  width: 100%;
  & > * {
    margin: 5px;
    color: #394248;
    cursor: pointer;
  }
`;

const Search = styled(Box)`
  width: calc(94% - 100px);
  background-color: #ffffff;
  border-radius: 8px;
  cursor: auto;
`;

const Input = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  font-size: 14px;
  padding-left: 25px;
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  // states and callback functions

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        try {
          let response = await uploadFile(data);
          setImage(response.data);
          console.log(response.data);
        } catch (error) {
          console.log("Error while uploading file: ", error.message);
        }
      }
    };
    getImage();
  }, [file, setImage]);

  const onFileChange = async (e) => {
    setFile(e.target.files[0]);
    await setValue(e.target.files[0].name);
  };

  return (
    <Component>
      <EmojiEmotionsOutlinedIcon />
      <label htmlFor="fileInput">
        <AttachFileOutlinedIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <Input
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <MicOutlinedIcon />
    </Component>
  );
};

export default Footer;

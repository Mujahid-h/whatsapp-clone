import { Box } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";

// Styling
const Component = styled(Box)`
  background: white;
  border-bottom: 2px solid #f4f6f7;
  box-sizing: border-box;
  padding: 6px 8px;
  width: 100%;
`;

const Wrapper = styled(Box)`
  position: relative;
  background: #f0f2f5;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const Icon = styled(SearchOutlinedIcon)`
  position: absolute;
  padding-left: 12px;
  font-size: 18px;
  color: #54656f;
  z-index: 9;
  cursor: pointer;
`;

const InputField = styled(InputBase)`
  padding: 4px;
  padding-left: 65px;
  font-size: 14px;
`;

const Search = ({ setText }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <InputField
          placeholder="search or start a new chat"
          onChange={(e) => setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  );
};

export default Search;

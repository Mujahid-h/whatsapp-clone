import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../service/Api";
import Convo from "./Convo";
import { Box, Divider } from "@mui/material";
import { AccountContext } from "../../../Context/AccountProvider";
import styled from "@emotion/styled";

// Styling
const Component = styled(Box)`
  height: 81vh;
  overflow: "overlay";
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  // states
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      const filteredData = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== account.sub && (
            <>
              <Convo user={user} />
              <StyledDivider />
            </>
          )
      )}
    </Component>
  );
};

export default Conversations;

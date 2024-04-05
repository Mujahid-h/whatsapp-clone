import React, { useState, createContext, useRef, useEffect } from "react";
import { io } from "socket.io-client";
// Context Api's
export const AccountContext = createContext(null); // can have multiple context Api's in same project

const AccountProvider = ({ children }) => {
  // states
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <div>
      <AccountContext.Provider
        value={{
          account,
          setAccount,
          person,
          setPerson,
          socket,
          activeUsers,
          setActiveUsers,
          newMessageFlag,
          setNewMessageFlag,
        }}
      >
        {children}
      </AccountContext.Provider>
    </div>
  );
};

export default AccountProvider;

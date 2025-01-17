//Purpose: Access context values without passing props down manually.

import React, { useContext, createContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Mayur">
      <UserProfile />
    </UserContext.Provider>
  );
}

function UserProfile() {
  const user = useContext(UserContext); // Access context value directly
  return <p>User: {user}</p>;
}

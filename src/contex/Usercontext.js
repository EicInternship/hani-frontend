import { createContext, useEffect, useState } from 'react';
import React from 'react'
const UserContext = createContext();

// export default UserContext;

function UserContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    console.log("parth",isLoggedIn)
    const handleLogin = () => {
        setIsLoggedIn(true);
      };
      const handleLogout = () => {
        setIsLoggedIn(false);
      };
    

  return (
    <UserContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
        {children}

  </UserContext.Provider>
  )
}
export { UserContext,UserContextProvider };



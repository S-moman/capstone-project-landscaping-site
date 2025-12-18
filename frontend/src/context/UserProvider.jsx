import { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [customer, setCustomer] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  let currentUser = {
    isLoggedIn,
    customer,
    employee,
    setEmployee,
    setCustomer,
    setIsLoggedIn,
  };

  return (
    <UserContext.Provider value={currentUser}>
        {children}
    </UserContext.Provider>
  );
};

export default UserContext;

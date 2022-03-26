import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

const UsersData = [
  {
    userName: "LINGESH",
    position: "FULL-STACK DEVELOPER",
    office: "CHENNAI",
    age: 22,
    startDate: "2022-02-21",
    salary: "500000",
  },
  {
    userName: "SANGAVI",
    position: "FULL-STACK DEVELOPER",
    office: "CHENNAI",
    age:  22,
    startDate: "2022-10-23",
    salary: "500000",
  },
  {
    userName: "SWETHA",
    position: "FULL-STACK DEVELOPER",
    office: "CHENNAI",
    age: 22,
    startDate: "2019-05-02",
    salary: "500000",
  },
  
];

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(UsersData);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
import React, { useState } from "react";

let ContactContext = React.createContext();

export default ContactContext;

const UsersData = [
  {
    userName: "VIRAT KOHLI",
    Team: "ROYAL CHALLENGERS BANGLORE",
    Home: "DELHI",
    age: 34,
    Birthdate: "1988-10-05",
    salary: "50000000",
  },
  {
    userName: "AB DEVILLERS",
    Team: "ROYAL CHALLENGERS BANGLORE",
    Home: "SOUTH AFRICA",
    age: 39,
    Birthdate: "1985-5-05",
    salary: "40000000",
  },
  {
    userName: "M.S.DOHNI",
    Team: "CHENNAI SUPER KINGS",
    Home: "RANCHI",
    age:  40,
    Birthdate: "2022-10-23",
    salary: "35000000",
  },
  {
    userName: "SACHIN TENDULAKAR",
    Team: "MUMBAI INDIANS",
    Home: "MUMBAI",
    age: 50,
    Birthdate: "2019-05-02",
    salary: "30000000",
  },
  
];

export const ContactProvider = ({ children }) => {
  const [userData, setUserData] = useState(UsersData);
  return (
    <ContactContext.Provider value={{ userData, setUserData }}>
      {children}
    </ContactContext.Provider>
  );
};
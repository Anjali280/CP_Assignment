import { createContext } from "react";

const data = {
  name: "Anjali Mondal",
  age: "24",
  Address: "Delhi, India",
};

export const AuthContext = createContext(data);

import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";

export const useAuthContext = () => {
  return useContext(AuthContext);
};
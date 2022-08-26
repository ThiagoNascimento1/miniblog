import { User } from "firebase/auth";
import { createContext } from "react";

export type AuthContextType = {
  user: User | null | undefined;
  setUser: (user: User | null) => void;
}

const initialValue = {
  user: null,
  setUser: () => {}
}

export const AuthContext = createContext<AuthContextType>(initialValue);
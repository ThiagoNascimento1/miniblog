// Context
import { User } from "firebase/auth";
// Firebase
import { AuthContext } from "./AuthContext";
// Hooks
import { useState } from "react";


export const AuthProvider = ({ children }: { children: JSX.Element})  => {

  const [ user, setUser ] = useState<User | null | undefined>(undefined);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
};
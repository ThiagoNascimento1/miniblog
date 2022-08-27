import { useAuthContext } from "../../hooks/useAuthContext";
import { Login } from "../../pages/Login";


export const RequiredAuth = ({ children }: { children: JSX.Element }) => {
  
  const { user } = useAuthContext();

  if (!user) {
    return <Login />
  }

  return children;
};
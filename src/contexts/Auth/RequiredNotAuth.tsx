import { useAuthContext } from "../../hooks/useAuthContext";
import { Home } from "../../pages/Home";


export const RequiredNotAuth = ({ children }: { children: JSX.Element }) => {
  
  const { user } = useAuthContext();

  if (user) {
    return <Home />
  }

  return children;
};
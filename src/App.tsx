// Router
import { RoutesPages } from "./routers/Routes";
// Components
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
// Styles
import * as C from "./styles/styles";
// Firebase
import { onAuthStateChanged, User } from "firebase/auth";
// Hooks
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";
import { useAuthContext } from "./hooks/useAuthContext";

export const App = () => {

  const { user, setUser } = useAuthContext();
  const { auth } = useAuth();

  const loadingUser = user === undefined;


  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

  }, [auth]);

  if(loadingUser) {
    return "Carrendo...";
  }

  return (
    <C.App>
      <NavBar />
      <RoutesPages />
      <Footer />
    </C.App>
  )
};
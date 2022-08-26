// Router
import { RoutesPages } from "./routers/Routes";
// Components
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
// Styles
import * as C from "./styles/styles";

export const App = () => {

  return (
    <C.App>
      <NavBar />
      <RoutesPages />
      <Footer />
    </C.App>
  )
};
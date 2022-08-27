// Router
import { Routes, Route } from "react-router-dom";
// Pages
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashbord";
import { CreatePost } from "../pages/CreatePost";
import { RequiredAuth } from "../contexts/Auth/RequiredAuth";
import { RequiredNotAuth } from "../contexts/Auth/RequiredNotAuth";

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/about" element={ <About /> } />
      <Route path="/login" element={ <RequiredNotAuth><Login /></RequiredNotAuth> } />
      <Route path="/register" element={ <RequiredNotAuth><Register /></RequiredNotAuth> } />
      <Route path="/dashboard" element={ <RequiredAuth><Dashboard /></RequiredAuth> } />
      <Route path="/posts/create" element={ <RequiredAuth><CreatePost /></RequiredAuth> } />
    </Routes>
  )
};
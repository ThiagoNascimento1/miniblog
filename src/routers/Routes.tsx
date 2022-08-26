// Router
import { Routes, Route } from "react-router-dom";
// Pages
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/about" element={ <About /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  )
};
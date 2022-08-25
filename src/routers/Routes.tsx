// Router
import { Routes, Route } from "react-router-dom";
// Pages
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/about" element={ <About /> } />
    </Routes>
  )
};
// Styles
import * as C from './styles';
// Router
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

  return (
    <C.Nav>
      <C.Brand>Mini <span>Blog</span></C.Brand>
      <C.Ul>

        <C.Li>
          <NavLink to="/">Home</NavLink>
        </C.Li>

        <C.Li>
          <NavLink to="/login">Login</NavLink>
        </C.Li>

        <C.Li>
          <NavLink to="/register">Registre-se</NavLink>
        </C.Li>

        <C.Li>
          <NavLink to="/about">Sobre</NavLink>
        </C.Li>

      </C.Ul>
    </C.Nav>
  )
};
// Styles
import * as C from './styles';
// Router
import { NavLink } from 'react-router-dom';
// Hooks
import { useAuth } from '../../hooks/useAuth';
import { useAuthContext } from '../../hooks/useAuthContext';

export const NavBar = () => {

  const { user } = useAuthContext();

  return (
    <C.Nav>
      <C.Brand>Mini <span>Blog</span></C.Brand>
      <C.Ul>

        <C.Li>
          <NavLink to="/">Home</NavLink>
        </C.Li>

        {!user && (
          <>
            <C.Li>
              <NavLink to="/login">Login</NavLink>
            </C.Li>

            <C.Li>
              <NavLink to="/register">Registre-se</NavLink>
            </C.Li>
          </>
        )}

        <C.Li>
          <NavLink to="/posts/create">Criar post</NavLink>
        </C.Li>

        <C.Li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </C.Li>

        <C.Li>
          <NavLink to="/about">Sobre</NavLink>
        </C.Li>

      </C.Ul>
    </C.Nav>
  )
};
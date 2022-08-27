// Styles
import * as C from './styles';
// Router
import { NavLink } from 'react-router-dom';
// Hooks
import { useAuthContext } from '../../hooks/useAuthContext';
import { useAuth } from '../../hooks/useAuth';

export const NavBar = () => {

  const { user } = useAuthContext();
  const { auth, logout } = useAuth();

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
              <NavLink to="/login">Entrar</NavLink>
            </C.Li>

            <C.Li>
              <NavLink to="/register">Registre-se</NavLink>
            </C.Li>
          </>
        )}

        {user && (
          <>
            <C.Li>
              <NavLink to="/posts/create">Criar post</NavLink>
            </C.Li>

            <C.Li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </C.Li>
          </>
        )}

        <C.Li>
          <NavLink to="/about">Sobre</NavLink>
        </C.Li>

        {user && (
          <C.Li>
            <C.Button onClick={() => logout(auth)}>Sair</C.Button>
          </C.Li>
        )}

      </C.Ul>
    </C.Nav>
  )
};
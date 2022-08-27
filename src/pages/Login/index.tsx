// Styles
import * as C from './styles';
// Hooks
import React, { useState, useEffect } from 'react';
// Components
import { FormError } from '../../components/FormError';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types/User';
import { NavLink } from 'react-router-dom';

export const Login = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const { error: authError, loading, login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(password.length > 6)) {
      setError('a senha deve conter 6 ou mais caracteres!');
      return;
    };

    const user: User = {
      email,
      password
    };

    const res = await login(user);

  };

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <C.Container>
      <C.Title>Fazer Login</C.Title>
      <C.Form onSubmit={handleSubmit} autoComplete="off">

        <C.Label>
          <span>Email</span>
          <C.InputArea>
          <i className="icon fa-solid fa-envelope"></i>
            <C.Input
            type="text"
            name="email"
            required
            spellCheck="false"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          </C.InputArea>
        </C.Label>

        <C.Label>
          <span>Senha</span>
          <C.InputArea>
          <i className="fa-solid fa-lock"></i>
            <C.Input
              type="password"
              name="password"
              required
              spellCheck="false"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </C.InputArea>
        </C.Label>

        {error && <FormError error={error}/>}

        {!loading && <C.Button>Entrar</C.Button>}
        {loading && <C.ButtonDisabled disabled>Aguarde...</C.ButtonDisabled>}    

        <C.Footer>novo por aqui? <NavLink to="/register">cadastre-se</NavLink></C.Footer>

      </C.Form>
    </C.Container>
  )
};
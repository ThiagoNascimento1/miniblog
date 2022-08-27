// Hooks
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormError } from '../../components/FormError';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types/User';
// Styles
import * as C from './styles';

export const Register = () => {

  const [ displayName, setDisplayName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ error, setError ] = useState('');

  const { createUser, error: authError, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(password.length > 6)) {
      setError('a senha deve conter 6 ou mais caracteres!');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas devem ser iguais!');
      return;
    };

    const user: User = {
      displayName,
      email,
      password
    };

    const res = await createUser(user);

    console.log(res);

  };

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <C.Container>
      <C.Title>Cadastre-se</C.Title>
      <C.Form onSubmit={handleSubmit}>

        {error && <FormError error={error}/>}

        <C.Label>
          <span>Nome de usuário</span>
          <C.InputArea>
          <i className="fa-solid fa-user"></i>
            <C.Input
              type="text"
              name="displayName"
              required
              onChange={e => setDisplayName(e.target.value)}
              value={displayName}
            />
          </C.InputArea>
        </C.Label>

        <C.Label>
          <span>Email</span>
          <C.InputArea>
          <i className="icon fa-solid fa-envelope"></i>
            <C.Input
              type="text"
              name="email"
              required
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
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </C.InputArea>
        </C.Label>

        <C.Label>
          <span>Confirmar senha</span>
          <C.InputArea>
          <i className="fa-solid fa-lock"></i>
            <C.Input
              type="password"
              name="password"
              required
              onChange={e => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </C.InputArea>
        </C.Label>

        {!loading && <C.Button>Cadastrar-se</C.Button>}
        {loading && <C.ButtonDisabled disabled>Aguarde...</C.ButtonDisabled>}     

        <C.Footer>já tem uma conta? <NavLink to="/login">acessar minha conta</NavLink></C.Footer>   

      </C.Form>
    </C.Container>
  )
};
// Styles
import * as C from './styles';
// Hooks
import React, { useState, useEffect } from 'react';
// Components
import { FormError } from '../../components/FormError';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types/User';

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
    console.log(res);

  };

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <C.Container>
      <C.Title>Fazer Login</C.Title>
      <C.Form onSubmit={handleSubmit}>

        {error && <FormError error={error}/>}

        <C.Label>
          <span>Email</span>
          <C.Input
            type="text"
            name="email"
            required
            placeholder="Email do usuário"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </C.Label>

        <C.Label>
          <span>Definir senha</span>
          <C.Input
            type="password"
            name="password"
            required
            placeholder="Definir senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </C.Label>

        {!loading && <C.Button>Entrar</C.Button>}
        {loading && <C.ButtonDisabled disabled>Aguarde...</C.ButtonDisabled>}        

      </C.Form>
    </C.Container>
  )
};
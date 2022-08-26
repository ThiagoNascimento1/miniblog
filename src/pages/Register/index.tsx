// Hooks
import React, { useEffect, useState } from 'react';
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
          <span>Nome</span>
          <C.Input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            onChange={e => setDisplayName(e.target.value)}
            value={displayName}
          />
        </C.Label>

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

        <C.Label>
          <span>Confirmar senha</span>
          <C.Input
            type="password"
            name="password"
            required
            placeholder="Confirmar senha"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </C.Label>

        {!loading && <C.Button>Concluir</C.Button>}
        {loading && <C.ButtonDisabled disabled>Aguarde...</C.ButtonDisabled>}        

      </C.Form>
    </C.Container>
  )
};
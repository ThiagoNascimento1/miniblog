// Styles
import * as C from './styles';
// Router
import { Navigate } from 'react-router-dom';
// Hooks
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { FormError } from '../../components/FormError';

export const CreatePost = () => {

  const [ title, setTitle ] = useState("");
  const [ image, setImage ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ error, setError ] = useState("");

  const { error: authError, loading } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost = {
      title,
      image,
      description
    }

    console.log(newPost);
  };

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <C.Container>
      <C.Title>Criar Post</C.Title>
      <C.Description>
        Compartilhe seus grandes momentos!
      </C.Description>
      <C.Form onSubmit={e => handleSubmit(e)} autoComplete="off">
        <C.Label>
            Título
          <C.InputArea>
            <C.Input
              type="text"
              name="title"
              required
              spellCheck="false"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </C.InputArea>
        </C.Label>

        <C.Label>
            Url da imagem
          <C.InputArea>
            <C.Input
              type="text"
              name="image"
              required
              spellCheck="false"
              onChange={e => setImage(e.target.value)}
              value={image}
            />
          </C.InputArea>
        </C.Label>

        <C.Label>
            Descrição
          <C.InputArea>
            <C.TextArea
              name="description"
              required
              maxLength={180}
              onChange={e => setDescription(e.target.value)}
              value={description}
            >
            </C.TextArea>
          </C.InputArea>
        </C.Label>

        {error && <FormError error={error}/>}

        {!loading && <C.Button>Postar</C.Button>}
        {loading && <C.ButtonDisabled disabled>Aguarde...</C.ButtonDisabled>}

      </C.Form>
    </C.Container>
  )
};
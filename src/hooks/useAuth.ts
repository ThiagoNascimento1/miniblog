// FireBase
import { bd } from '../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  Auth
} from 'firebase/auth';
// Hooks
import { useState, useEffect } from 'react';
// Types
import { User } from '../types/User';

export const useAuth = () => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState<string | null>(null);

  const auth = getAuth();
  const bdfirebase = bd;

  const [ cancelled, setCancelled ] = useState(false);

  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  // Register
  const createUser = async (data: User) => {

    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {

      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName
      });

      setLoading(false);

      return user;

    } catch(error) {
      
      if (error instanceof Error) {

        console.log(error.message);
        
        let systemErrorMenssage;

        if(error.message.includes("email-already")) {
          systemErrorMenssage = "email já cadastrado.";
        } else {
          systemErrorMenssage = "ocorreu um erro, por favor tente mais tarde.";
        }

        setLoading(false);
        setError(systemErrorMenssage);
      }
    }

  };

  // Logout
  const logout = (auth: Auth) => {
    checkIfIsCancelled();

    signOut(auth);
  };

  // Login
  const login = async (user: User) => {

    checkIfIsCancelled();
    setError(null);
    setLoading(true);

    try {

      await signInWithEmailAndPassword(auth, user.email, user.password);
      setLoading(false);

    } catch(error) {

      if (error instanceof Error) {

        console.log(error.message);
        
        let systemErrorMenssage;

        if(error.message.includes("user-not-found")) {
          systemErrorMenssage = "usuário não encontrado.";
        } else if (error.message.includes("wrong-password")) {
          systemErrorMenssage = "senha de usuário incorreta.";
        } else {
          systemErrorMenssage = "ocorreu um erro, por favor tente mais tarde.";
        }

        setLoading(false);
        setError(systemErrorMenssage);
      }

    }

  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  }
};
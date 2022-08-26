// FireBase
import { bd } from '../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
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
          systemErrorMenssage = "email já cadastrado!";
        } else {
          systemErrorMenssage = "ocorreu um erro, tente novamente mais tarde!";
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
    loading
  }
};
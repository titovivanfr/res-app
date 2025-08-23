'use_client';
import axios from 'axios';
import { useState } from 'react';

export default function LoginHook() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const url = process.env.NEXT_PUBLIC_SERVER_URL + '/login';

  const login = async (email, password) => {
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    axios
      .post(
        url,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        },
        { withCredentials: true }
      )
      .then(res => {
        console.log(res);
      })
      .catch(function (error) {
        const status = error.response?.status;
        if (status === 401)
          setIsError({
            message:
              "Informations d'identification non valides"
          });
        else if (status > 500)
          setIsError({
            message: "Quelque chose s'est mal passé"
          });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    isLoading,
    login,
    isError,
    setIsError
  };
}

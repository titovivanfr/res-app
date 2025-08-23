'use client';
import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  CircularProgress,
  Snackbar
} from '@mui/material';
import Fade from '@mui/material/Fade';
import { useRouter } from 'next/router';
import LoginHook from '@/api/login/loginHook';

export default function Home() {
  const { isLoading, login, isError, setIsError } =
    LoginHook();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const router = useRouter();
  const closeSnackBar = () => setIsError(false);
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await login(
      formData.email,
      formData.password
    );
    if (res?.ok) {
      router.push('/dashbord');
    }
  };

  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 font-sans sm:p-20">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-6"
      >
        <FormControl fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="email-helper-text"
          />
          <FormHelperText id="email-helper-text">
            Nous ne partagerons jamais votre email.{' '}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="password">
            Mot de passe
          </InputLabel>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            aria-describedby="password-helper-text"
          />
          <FormHelperText id="password-helper-text">
            Nous ne partagerons jamais votre mot de
            passe.{' '}
          </FormHelperText>
        </FormControl>
        {!isLoading ? (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Envoyer
          </Button>
        ) : (
          <CircularProgress
            sx={{
              margin: '0 auto'
            }}
          />
        )}
        {isError ? (
          <Snackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            slots={{ transition: Fade }}
            message={isError.message}
            onClose={closeSnackBar}
          />
        ) : null}
      </form>
    </div>
  );
}

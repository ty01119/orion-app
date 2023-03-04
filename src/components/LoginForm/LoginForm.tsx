import { Typography, Container, Box, TextField, Grid, Button } from '@mui/material'
import React, { useCallback, useRef } from 'react';

export interface LoginFormProps {
  onSubmit?: (username: string, password: string) => void
  loginStatus: { isLogin: boolean, errorMessage: string }
}

export const LoginForm = ({ onSubmit, loginStatus }: LoginFormProps) => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;
      onSubmit?.(username as string, password as string);
    },
    [onSubmit],
  )

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Typography variant='h4' component='h1'>Clinical Portal Sign In</Typography>
      <Box component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          paddingTop: 2,
        }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              inputRef={usernameRef}
              required
              id='username'
              label='Username'
              data-testid='username'
              disabled={loginStatus.isLogin}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={passwordRef}
              required id='password' label='Password' data-testid='password' type={'password'}
              disabled={loginStatus.isLogin}
            />
          </Grid>
          {loginStatus.errorMessage &&
            <Grid item xs={12}>
              <Typography color='error'>{loginStatus.errorMessage}</Typography>
            </Grid>
          }
          <Grid item xs={12}>
            <Button variant='contained' type='submit'
              disabled={loginStatus.isLogin}
            >{loginStatus.isLogin ? 'Logging...' : 'Log In'}</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
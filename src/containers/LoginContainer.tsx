import { Box } from '@mui/material'
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../components/LoginForm/LoginForm'
import login from '../services/user/login'
import { sessionTokenService } from '../services/user/sessionStorageSevices'

export const LoginContainer: FC = () => {

  const [loginStatus, setLoginStatus] = useState({ isLogin: false, errorMessage: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const seesionToken = sessionTokenService.getFromSessionStorage();
    if (seesionToken) {
      navigate('/dashboard');
    }
  }, [navigate])

  const handleOnSubmit = async (username: string, password: string) => {
    setLoginStatus({ isLogin: true, errorMessage: '' });
    const returnData = await login(username, password);
    if (returnData.sessionToken) {
      sessionTokenService.saveToSessionStorage(returnData.sessionToken)
      navigate('/dashboard')
    }
    else {
      setLoginStatus({ isLogin: false, errorMessage: returnData.errorMessage })
    }
  }

  return (
    <Box sx={{ width: '100%', height: `${window.innerHeight}px`, display: 'flex', alignItems: 'center' }}>
      <LoginForm onSubmit={handleOnSubmit} loginStatus={loginStatus} />
    </Box>
  )
}

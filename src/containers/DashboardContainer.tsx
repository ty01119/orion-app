import { Box, Container, Typography } from '@mui/material'
import { useEffect } from 'react';
import { useNavigate } from 'react-router'
import { sessionTokenService } from '../services/user/sessionStorageSevices'
import { ClinicianDetailsContainer } from './ClinicianDetailsContainer'
import { PatientsContainer } from './PatientsContainer'

export const DashboardContainer = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = sessionTokenService.getFromSessionStorage()
    console.log('sessionToken', sessionToken);
    if (!sessionToken) {
      navigate('/');
    }
  }, [navigate])

  return (
    <Container component='div' sx={{
      paddingTop: '20px',
      paddingBottom: '20px',
      marginTop: '40px',
      marginBottom: '40px'
    }}>
      <Box component={'div'} sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Box sx={{
          width: '50%',
          border: '1px solid #ccc',
          paddingTop: '20px',
          paddingBottom: '20px',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography variant='h4'>Clinical Portal</Typography>
        </Box>
        <Box sx={{
          width: '50%',
          border: '1px solid #ccc',
          paddingTop: '20px',
          paddingBottom: '20px',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ClinicianDetailsContainer />
        </Box>
      </Box>
      <Box component='div' sx={{
        paddingTop: '20px',
        paddingBottom: '20px',
        border: '1px solid #ccc',
        minHeight: '400px'
      }}>
        <PatientsContainer />
      </Box>
    </Container>
  )
}

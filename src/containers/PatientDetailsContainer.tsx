import { Box } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { PatientDetails } from '../components/Patient/PatientDetails';
import { getPatientDetails, PatientDetailsData } from '../services/user/patientServices';
import { sessionTokenService } from '../services/user/sessionStorageSevices';
import { FetchState } from '../types';

interface PatientDetailsContainerProps {
  patientId: string;
}

export const PatientDetailsContainer: FC<PatientDetailsContainerProps> = (props) => {
  const { patientId } = props;
  const isMounted = useRef(false);

  const [patientDetailsData, setPatientDetailsData] = useState<FetchState<PatientDetailsData>>({
    loading: true,
    errorMessage: null,
    data: null
  });

  const renderContent = () => {
    if (patientDetailsData.errorMessage) {
      return <div>{patientDetailsData.errorMessage}</div>
    }
    if (patientDetailsData.data) {
      return <PatientDetails {...patientDetailsData.data} />
    }
    return <div>Loading...</div>
  }

  useEffect(() => {
    isMounted.current = true;
    const sessionToken = sessionTokenService.getFromSessionStorage()
    if (sessionToken) {
      getPatientDetails(sessionToken, patientId).then((data) => {
        if (isMounted.current === false) return;
        setPatientDetailsData({
          loading: false,
          errorMessage: data?.errorMessage,
          data
        })
      })
    }

    return () => {
      isMounted.current = false;
    }
  }, [patientId])

  return (
    <Box sx={{ width: '100%' }}>
      {renderContent()}
    </Box>
  )
}

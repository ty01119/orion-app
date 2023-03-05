import { useEffect, useRef, useState } from 'react';
import { PatientsTab } from '../components/Patient/PatientsTab';
import { getPatients, PatientData } from '../services/patient/patientServices';
import { sessionTokenService } from '../services/user/sessionStorageSevices';
import { FetchState } from '../types';

export const PatientsContainer = () => {
  const [patientsState, setPatientsState] = useState<FetchState<PatientData[]>>({
    loading: true,
    errorMessage: null,
    data: null
  });
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    const sessionToken = sessionTokenService.getFromSessionStorage()
    if (sessionToken) {
      getPatients(sessionToken).then((data) => {
        if (isMounted.current === false) return;
        setPatientsState({
          loading: false,
          errorMessage: data?.errorMessage,
          data
        })
      })
    }

    return () => {
      isMounted.current = false;
    }
  }, [])
  return <PatientsTab patientsState={patientsState} />
}

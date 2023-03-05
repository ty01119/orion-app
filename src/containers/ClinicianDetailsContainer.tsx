import { useEffect, useState, useRef } from 'react';
import { ClinicianDetails } from '../components/Clinician/ClinicianDetails'
import { ClinicianDetailsData, getClinicianDetails } from '../services/clinician/clinicianServices';
import { sessionTokenService } from '../services/user/sessionStorageSevices';
import { FetchState } from '../types';

export const ClinicianDetailsContainer = () => {
  const [clinicianDetailsData, setClinicianDetailsData] = useState<FetchState<ClinicianDetailsData>>({
    loading: true,
    errorMessage: null,
    data: null
  });
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    const sessionToken = sessionTokenService.getFromSessionStorage()
    if (sessionToken) {
      getClinicianDetails(sessionToken).then((data) => {
        if (isMounted.current === false) return;
        setClinicianDetailsData({
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

  return (
    <ClinicianDetails clinicianDetailsData={clinicianDetailsData} />
  )
}

import { Box } from '@mui/material'
import { FC } from 'react';
import { ClinicianDetailsData } from '../../services/clinician/clinicianServices'
import { FetchState } from '../../types'
import { getDetailsString } from '../../utils/getDetailsString';

interface ClinicianDetailsProps {
  clinicianDetailsData: FetchState<ClinicianDetailsData>
}

export const ClinicianDetails: FC<ClinicianDetailsProps> = (props) => {
  const { data, loading, errorMessage } = props.clinicianDetailsData

  const renderContent = () => {
    if (loading) {
      return 'Loading...';
    }
    if (errorMessage) {
      return errorMessage;
    }
    if (data) {
      return getDetailsString(data);
    }

  }

  return (
    <Box component='div'>
      {renderContent()}
    </Box>
  )
}

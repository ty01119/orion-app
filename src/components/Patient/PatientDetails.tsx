import { Box } from '@mui/material';
import { PatientDetailsData } from '../../services/user/patientServices'
import { getDetailsString } from '../../utils/getDetailsString';

export const PatientDetails = (props: PatientDetailsData) => {

  return (
    <Box sx={{ textAlign: 'left' }}>
      <Box>
        Title: {getDetailsString(props)}
      </Box>
      {props.age && (
        <Box>
          Age: {props.age}
        </Box>
      )}
      {props.sex && (
        <Box>
          Gender: {props.sex}
        </Box>
      )}
    </Box>
  )
}

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FC, useState } from 'react';
import { FetchState } from '../../types';
import { PatientData } from '../../services/user/patientServices';
import { PatientDetailsContainer } from '../../containers/PatientDetailsContainer';

interface PatientsTabProps {
  patientsState: FetchState<PatientData[]>;
}

function a11yProps(id: number) {
  return {
    id: `patient-tab-${id}`,
    'aria-controls': `patient-tabpanel-${id}`,
  };
}

export const PatientsTab: FC<PatientsTabProps> = (props) => {
  const [value, setValue] = useState<number | null>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  const getCurrentPatient = () => {
    if (props.patientsState.data) {
      const currentPatient = props.patientsState.data[value ? value : 0]
      return <PatientDetailsContainer patientId={currentPatient.id} />
    }
    return null
  }

  const renderContent = () => {
    if (props.patientsState.errorMessage) {
      return <div>{props.patientsState.errorMessage}</div>
    }

    if (props.patientsState.data && value !== null) {
      return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              {
                props.patientsState.data.map((patient, index) => {
                  return (
                    <Tab key={patient.id} label={patient.name} {...a11yProps(index)} />
                  )
                })
              }
            </Tabs>
          </Box>
          <Box sx={{ p: 3 }}>
            {getCurrentPatient()}
          </Box>

        </Box>
      );
    }
    return <div>Loading...</div>
  }
  return renderContent();
}

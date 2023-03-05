export interface PatientData {
  id: string;
  name: string;
}

export interface PatientDetailsData {
  title?: string;
  firstName: string;
  preferredName?: string;
  middleName?: string;
  familyName: string;
  suffix?: string;
  age: number;
  sex: 'Male' | 'Female' | 'Unknown' | 'Indeterminate';
}

export const getPatients = async (sessionToken: string) => {
  const res = await fetch('/patients', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionToken}`
    }
  });
  const data = await res.json();
  if (data) {
    return data.patients;
  }
  return { errorMessage: data.errorMessage };
}

export const getPatientDetails = async (sessionToken: string, patientId: string) => {
  const res = await fetch(`/patient-details/${patientId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionToken}`
    }
  });
  const data = await res.json();
  if (data) {
    return data;
  }
  return { errorMessage: data.errorMessage };
}

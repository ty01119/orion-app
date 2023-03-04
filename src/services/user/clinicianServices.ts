export interface ClinicianDetailsData {
  username: string;
  role: string;
  title?: string;
  firstName: string;
  preferredName?: string;
  middleName?: string;
  familyName: string;
  suffix?: string;
}

export const getClinicianDetails = async (sessionToken: string) => {
  const res = await fetch('/clinician-details', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // basic auth
      Authorization: `${sessionToken}`
    }
  });
  const data = await res.json();
  if (data) {
    return data;
  }
  return { errorMessage: data.errorMessage };
}

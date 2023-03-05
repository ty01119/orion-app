import { ClinicianDetailsData } from "../services/clinician/clinicianServices";
import { PatientDetailsData } from "../services/patient/patientServices";

export const getDetailsString = (details: ClinicianDetailsData | PatientDetailsData) => {
  const nameParts = [];

  if (details.title) {
    nameParts.push(details.title);
  }
  if (details.preferredName) {
    nameParts.push(`${details.preferredName} (${details.firstName})`);
  }
  else {
    nameParts.push(details.firstName);
  }
  if (details.middleName) {
    nameParts.push(details.middleName);
  }
  if (details.familyName) {
    nameParts.push(details.familyName);
  }
  if (details.suffix) {
    nameParts.push(details.suffix);
  }
  return nameParts.join(' ');
}
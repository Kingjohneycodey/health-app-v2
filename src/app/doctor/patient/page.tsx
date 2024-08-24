'use client'

import Avatar from '../../../assets/img/avatar.png'
import PatientSection from '../../../components/PatientSection/PatientSection'



export default function Patient() {
  return (
    <main className="pt-4">
      <div>
      <PatientSection avatar={Avatar} heading="Jane Smith" address="456 Oak Ave" />
      </div>
     
    </main>
  );
}

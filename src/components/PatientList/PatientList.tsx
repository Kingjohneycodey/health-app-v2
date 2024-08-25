import React from 'react';


interface PatientProps {
    avatar: any;
    heading: string;
    address: string;
    weight: string;
    weightParam: string;
    bloodPressure: string;
    bloodValue: string;
    bloodGlucose: string;
    glucoseValue: string;
  }
  
const PatientList: React.FC<PatientProps> = ({ avatar, heading, address, weight, weightParam, bloodPressure, bloodValue, glucoseValue, bloodGlucose }) => {
  return (
    <div className="overflow-auto p-6 w-[300px] h-[380px] border border-gray-300 rounded-lg">
        <div className="w-[75px] h-[75px] rounded-full border-4 border-white overflow-hidden flex justify-center items-center">
          <img
            src={avatar.src}
            alt="Patient avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <div className='border-gray-300 border-b mb-3'>
        <h2 className=' font-bold text-[#00008b]'>{heading}</h2>
        <p className='pb-3 text-gray-400'>{address}</p>
        </div>
        <div className='flex flex-col gap-3'>
        <div className='flex flex-row justify-between'>
            <p className='text-gray-400'>{weight}</p>
            <p className='font-bold text-[#00008b]'>{weightParam}</p>
        </div>
        <div className='flex flex-row justify-between'>
            <p className='text-gray-400'>{bloodPressure}</p>
            <p className='font-bold text-[#00008b]'>{bloodValue}</p>
        </div>
        <div className='flex flex-row justify-between'>
            <p className='text-gray-400'>{bloodGlucose}</p>
            <p className='font-bold text-[#00008b]'>{glucoseValue}</p>
        </div>
        </div>
        <div className='flex items-center justify-center mt-6'>
          <button className='bg-[#00008b] text-gray-400 px-12 py-4 rounded-lg'>View Patient Details</button>
        </div>
        
      </div>
  )
}

export default PatientList
import React from "react";
import PatientList from "../PatientList/PatientList";
import { AiOutlineSearch } from "react-icons/ai";
import { IoDownloadOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import Avatar from '../../assets/img/profile.jpg'
import Avatar2 from '../../assets/img/images.jpeg'
import Avatar3 from '../../assets/img/mine.jpg'
import Avatar4 from '../../assets/img/mine2.webp'
import Avatar5 from '../../assets/img/mine4.jpeg'
import Avatar6 from '../../assets/img/mine5.jpeg'
import Avatar7 from '../../assets/img/mine6.jpg'



const PatientSection: React.FC = () => {
  return (
    <div className="px-10">
      <h1 className="text-4xl smm:text-[18px] text-[#00008b] font-bold pt-10 pb-4">Patient List</h1>
      <div className="flex flex-row justify-between mb-4">
        <div className="relative w-[400px] smm:mr-4">
          <AiOutlineSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            className="w-full h-16 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for patient here"
          />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2 py-2 rounded-lg px-4 items-center bg-gray-200">
            <IoDownloadOutline size={25} color="#00008b" />
            <h2 className="smm:hidden font-bold text-[#00008b]">Download Report</h2>
          </div>

          <div className="flex flex-row gap-2 py-2 rounded px-4 items-center bg-gray-200">
            <CiFilter size={25} color="#00008b" />
            <h2 className="smm:hidden font-bold text-[#00008b]">Filter</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <PatientList  avatar={Avatar} heading="John smith" address="St John Patrick, US, Canada" weight="Weight" weightParam="160lb" bloodPressure="Blood Pressure" bloodValue="190/80mmHg" bloodGlucose="Blood Glucose" glucoseValue="120mg/dl" />

        <PatientList  avatar={Avatar2} heading="Morgan David" address="St John Marshal, UK, Canada" weight="Weight" weightParam="120lb" bloodPressure="Blood Pressure" bloodValue="130/80mmHg" bloodGlucose="Blood Glucose" glucoseValue="110 mg/dl" />
       
        <PatientList  avatar={Avatar3} heading=" Tony Rado" address="Agoole Egba, ilorin, Ijesa" weight="Weight" weightParam="100lb" bloodPressure="Blood Pressure" bloodValue="110/80mmHg" bloodGlucose="Blood Glucose" glucoseValue="100 mg/dl" />

        <PatientList  avatar={Avatar4} heading="Mavricks Daniel" address="Iyana, aere, eleta" weight="Weight" weightParam="80lb" bloodPressure="Blood Pressure" bloodValue="100/80mmHg" bloodGlucose="Blood Glucose" glucoseValue="159 mg/dl" />
        
        <PatientList  avatar={Avatar5} heading="Samson Kate" address="Centeral plains, korean" weight="Weight" weightParam="76lb" bloodPressure="Blood Pressure" bloodValue="130/60mmHg" bloodGlucose="Blood Glucose" glucoseValue="140 mg/dl" />

        <PatientList  avatar={Avatar7} heading="Roman Reigns" address="Iyana gaku street, mark, Oyo" weight="Weight" weightParam="76lb" bloodPressure="Blood Pressure" bloodValue="120/80mmHg" bloodGlucose="Blood Glucose" glucoseValue="124 mg/dl" />

        <PatientList  avatar={Avatar6} heading="Roman Reigns" address="Iyana gaku street, mark, Oyo" weight="Weight" weightParam="76lb" bloodPressure="Blood Pressure" bloodValue="120/80mmHg" bloodGlucose="Blood Glucose" glucoseValue="124 mg/dl" />

        <PatientList  avatar={Avatar2} heading="Roman Reigns" address="Iyana gaku street, mark, Oyo" weight="Weight" weightParam="76lb" bloodPressure="Blood Pressure" bloodValue="120/80mmHg" bloodGlucose="Blood Glucose" glucoseValue="124 mg/dl" />

       
      </div>

      <div className="flex justify-end mt-5 mb-5">
          <p className="text-gray-500">Page 1 of 10</p>
      </div>
    </div>
  );
};

export default PatientSection;

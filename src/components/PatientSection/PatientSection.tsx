import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoDownloadOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";

interface PatientProps {
  avatar: any;
  heading: string;
  address: string;
}

const PatientSection: React.FC<PatientProps> = ({ avatar, heading, address }) => {
  return (
    <div>
      <h1 className="text-[#00008b] text-4xl font-bold pt-10">Patient List</h1>
      <div className="flex flex-row justify-between">
        <div className="relative w-[400px]">
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
            <h2 className="font-bold text-[#00008b]">Download Report</h2>
          </div>

          <div className="flex flex-row gap-2 py-2 rounded px-4 items-center bg-gray-200">
            <CiFilter size={25} color="#00008b" />
            <h2 className="font-bold text-[#00008b]">Filter</h2>
          </div>
        </div>
      </div>
      <div className="overflow-auto p-6 w-[300px] h-[380px] border border-gray-300 rounded-lg">
        <div className="w-[75px] h-[75px] rounded-full border-4 border-white overflow-hidden flex justify-center items-center">
          <img
            src={avatar.src}
            alt="Patient avatar"
            className="object-cover w-full h-full"
          />
        </div>
        <h2>{heading}</h2>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default PatientSection;

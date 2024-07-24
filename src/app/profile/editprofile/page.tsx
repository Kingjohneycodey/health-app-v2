'use client';
// import { useState, useEffect } from 'react';
import editBackground from '../../../../public/assets/editbackground.png';
import frame1 from '../../../../public/assets/frame1.png';
import Image from 'next/image';

const Editprofile = () => {
  // const [profilePicUrl, setProfilePicUrl] = useState(() => {
  //   return localStorage.getItem('profilePicUrl') || frame1;
  // });

  // useEffect(() => {
  //   const inputFile = document.getElementById('input-file');

  //   const handleFileChange = () => {
  //     const file = inputFile.files[0];
  //     if (file) {
  //       const imageUrl = URL.createObjectURL(file);
  //       setProfilePicUrl(imageUrl);
  //       localStorage.setItem('profilePicUrl', imageUrl);
  //     }
  //   };

  //   inputFile.addEventListener('change', handleFileChange);

  //   return () => {
  //     inputFile.removeEventListener('change', handleFileChange);
  //   };
//   }, []);

  return (
    <main>
      <p>h</p>
      <section className="doctor-layout menu">
        <section className="m-4">
          <h1 className="text-xl font-semibold text-[#103F74]">Edit Profile</h1>
          <p className="text-sm text-[#A9B4CD] my-1">
            Your profile will be displayed publicly so be careful what you share
          </p>

          <div>
            <p className="font-semibold my-2 mt-4 text-[17px] text-[#103F74]">Cover</p>
             <Image
                src={editBackground}
                alt="Vercel Logo"
                className="w-[100%] h-[250px] object-cover rounded-[20px]" 
                width={100}
                height={24}
                priority
            />
            <p className="text-[15px] mt-5 mb-2 font-semibold text-[#103F74]">Profile Picture</p>

            <div className="flex items-center gap-4">
              <Image
              src={frame1}
              alt="Profile Picture"
              className="my-3 rounded-full" 
              width={50}
              height={50}
              priority
            />
              <label htmlFor="input-file" className='my-3 bg-[#103F74] p-3 px-6 py-3 text-white rounded-lg text-xs smm:px-4 lgg:px-3'>Change Photo</label>
              {/* <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" className="hidden" /> */}
              <button
                className="border-[#A9B4CD] border-[2px] border-[solid] py-3 px-6 rounded-lg text-xs smm:px-4 lgg:px-3"
                // onClick={() => {
                //   setProfilePicUrl(frame1);
                //   localStorage.removeItem('profilePicUrl');
                // }}
              >
                Remove Photo
              </button>
            </div>
          </div>
        </section>

        <section className="m-4">
          <div className="block">
            <label htmlFor="name" className="text-[#103F74] font-semibold text-sm">Fullname</label>
            <input type="text" className="w-[100%] my-2 p-3 border-[#DFE8F6] border-[2px] border-solid rounded-lg text-xs" placeholder="Input your full name here" />
          </div>

          <div className="block">
            <label htmlFor="name" className="text-[#103F74] font-semibold text-sm">Specificity</label>
            <input type="text" className="w-[100%] my-2 p-3 border-[#DFE8F6] border-[2px] border-solid rounded-lg text-xs" placeholder="Input your Specificity here" />
          </div>

          <div className="block">
            <label htmlFor="name" className="text-[#103F74] font-semibold text-sm">Location</label>
            <input type="text" className="w-[100%] my-2 p-3 border-[#DFE8F6] border-[2px] border-solid rounded-lg text-xs" placeholder="Input your Location here" />
          </div>

          <div className="block">
            <label htmlFor="name" className="text-[#103F74] font-semibold my-4 text-sm">Profile description</label>
            <textarea  className="w-[100%] my-2 p-3 border-[#DFE8F6] border-[2px] border-solid rounded-lg text-sm" placeholder="Input your profile description here"></textarea>
          </div>
        </section>

        <div className="flex items-center justify-end mr-4 gap-4">
          <button className="border-[#A9B4CD] border-[2px] border-[solid] py-3 px-6 rounded-lg text-xs smm:px-4 lgg:px-3">Save Profile</button>
          <button className="my-3 bg-[#103F74] p-3 px-6 py-3 text-white rounded-lg text-xs smm:px-4 lgg:px-3">Cancel</button>
        </div>
      </section>
    </main>
  );
}

export default Editprofile;

'use client'
import React from 'react'
import editBackground from '../../../public/assets/editbackground.png'
import edit from '../../../public/assets/edit.png'
import frame1 from '../../../public/assets/frame1.png'
import location from '../../../public/assets/location.png'
import filter from '../../../public/assets/filter.png'
import download from '../../../public/assets/download.png'
import Link from 'next/link'
import Image from 'next/image'
import './profile.css'
// import { useRouter } from 'next/router'

const DoctorProfile = () => {
  // const handleClick = () => {
  //   const router = useRouter()
  //   router.push('profile/editprofile')
  // }
  return (
    <main>
    <section className="doctor-layout menu">
    <div className="flex items-center justify-between mr-4 my-3 smm:mt-16">  
            <h1 className="text-[#103F74] text-[20px] font-semibold m-3 smm:text-[22px]">PROFILE</h1>
                <div className="flex gap-5">
                    <div className="flex gap-2 items-center bg-[#C5D0E6] p-2 rounded-lg">
                    <Image
                  src={download}
                  alt="Download Logo"
                  width={25}
                  height={24}
                  priority
                />
                      <p className="font-semibolb text-xs smm:hidden">Download Report</p>
                    </div>
                    <div className="flex gap-2 items-center bg-[#C5D0E6] p-2 rounded-lg px-3">
                    <Image
                  src={filter}
                  alt="Filter Logo"
                  width={15}
                  height={24}
                  priority
                />
                      <p className="font-semibolb text-xs smm:hidden">Filter</p>
                    </div>
                </div>
        </div>
        
        <div className='rounded-xl  bg-white m-4 '>
            <Image
                src={editBackground}
                alt="Vercel Logo"
                className="w-[100%] h-[250px] object-cover profile_img"
                width={100}
                height={24}
                priority
            />
                <div className='flex justify-between items-center p-3 border-[#DFE8F6] border-[2px] border-solid side_round '>
                <div className='flex items-center gap-10 smm:gap-1'>
            <Image
                src={frame1}
                alt="Vercel Logo"
                className='edit smm:w-[80px]'
                width={100}
                height={24}
                priority
            />
              <div className='mt-3'>
                            <p className='font-semibold'>dr. Selena odette </p>
                            <p className='text-sm text-[#A9B4CD] mt-1 smm:text-xs'>Specialist of skin surgery picko clinic</p>
                            <div className='flex items-center gap-2 mt-4 bg-[#C5D0E6] p-2 rounded-lg w-[200px]'>
                            <Image
                                src={location}
                                alt="Vercel Logo"
                                width={20}
                                height={24}
                                priority
                            />
                        
                                <p className='text-sm font-semibold '>Semarang, Indonesia</p>
                            </div>
                    </div>
                 </div>

                  <Link href="/profile/editprofile" className='transition-none  hover:p-0'><div className='flex items-center gap-5  border-[#A9B4CD] border-[2px] border-solid p-3 rounded-lg'>
              <Image
                    src={edit}
                    alt="Vercel Logo"
                    width={20}
                    height={24}
                    priority
                 />
                
                        <p className='text-sm text-[#2B7BAE smm:hidden'>Edit Profile</p>
                    </div></Link> 

            </div>
        </div>

        <div className='m-4 border-[#DFE8F6] border-[2px] border-solid rounded-xl p-4 smm:border-[#A9B4CD]'>
             <h1 className='font-semibold my-3 text-lg'>Profile Description</h1>
             <p className='text-sm text-[#A9B4CD] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum enim atque odit consequatur, dolores perspiciatis, atque odit consequatur, dolores perspiciatis..</p>
             <p className='text-sm my-3 text-[#A9B4CD] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa.</p>
         
         <div className='my-3'>
                <li className='my-1 text-[#A9B4CD] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit Repudiandae harum enim.</li>
                <li className='my-1 text-[#A9B4CD] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit Repudiandae harum enim.</li>
                <li className='my-1 text-[#A9B4CD] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit Repudiandae harum enim.</li>
        </div>
             
        </div>
    </section>
</main>
  )
}

export default DoctorProfile

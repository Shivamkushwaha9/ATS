import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsGenderAmbiguous, BsCalendarDate, BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const ProfileCard = () => {
  return (
    <div>
        {/* Actual Profile */}
        <div className='mx-auto my-12 w-[90vw] border rounded-lg bg-white flex flex-row'>
            <div className='w-[20%] ml-10 flex items-center justify-center  my-4        '>
               <img className='h-44 w-44 p-4' src='/images/bg.png' />
            </div>
            <div className='flex flex-col w-[65%]'>
               <div className='flex flex-col py-5 px-5 my-4 '>
                  <h1 className='text-3xl font-bold '>Shivam Kushwaha</h1>
                  <h2 className='text-xl font-semibold pt-2'>B.Tech/B.E</h2>
                  <h3 className='text-lg text-gray-500'>Lokmanya Tilak college of Engineering, Navi Mumbai</h3>
               </div>
               <div className='grid grid-cols-2 gap-4 py-5 px-5'>
                  {/* Left Column */}
                  <div className='space-y-4 border-r pr-1'>
                     <div className='flex items-center gap-3'>
                        <FaMapMarkerAlt className='text-gray-600 text-lg' />
                        <span className='text-sm'>Mumbai, Maharashtra</span>
                     </div>

                     <div className='flex items-center gap-3'>
                        <BsGenderAmbiguous className='text-gray-600 text-lg' />
                        <span className='text-sm'>Male</span>
                     </div>

                     <div className='flex items-center gap-3'>
                        <BsCalendarDate className='text-gray-600 text-lg' />
                        <span className='text-sm'>01 January 2000</span>
                     </div>
                  </div>

                  {/* Right Column */}
                  <div className='space-y-4'>
                     <div className='flex items-center gap-3'>
                        <BsTelephone className='text-gray-600 text-lg' />
                        <span className='text-sm'>+91 9876543210</span>
                     </div>

                     <div className='flex items-center gap-3'>
                        <MdEmail className='text-gray-600 text-lg' />
                        <span className='text-sm'>shivam@example.com</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className='w-[50%] mx-5 relative flex justify-center items-center my-4 rounded-lg border-red-500'>
               
               <div className='absolute inset-0'>
                  <img
                     src='/images/leaderboard.jpg'
                     alt='Leaderboard Background'
                     className='w-full h-full rounded-lg object-cover'
                  />
                  
                  <div className='absolute rounded-lg inset-0 bg-black/40'></div>
               </div>

               {/* Content Container */}
               <div className='relative z-10 h-full flex flex-col justify-center items-center text-white p-6 text-center'>
                  <h2 className='text-3xl font-bold mb-3 '>
                     Global Rankings
                  </h2>

                  <p className='text-lg mb-6 max-w-sm opacity-90'>
                     Compete with students worldwide and showcase your skills. Rise through the ranks and become a top performer!
                  </p>

                  <Link
                     href="/leaderboard"
                     className='bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
         px-8 py-3 rounded-full font-semibold shadow-lg 
         transition-all duration-300 hover:scale-100' // Removed transform and set hover:scale-100
                  >
                     View Leaderboard
                  </Link>
               </div>
            </div>
         </div>
    </div>
  )
}

export default ProfileCard
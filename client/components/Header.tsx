'use client';
import React, { useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { FaBars, FaUser, FaTimes } from 'react-icons/fa';
import { signIn, signOut, useSession } from "next-auth/react"
import Link from 'next/link';
import Image from 'next/image';




const Header = () => {

    //For authentication
    const { data: session } = useSession();
    const [logined, setLogined] = useState(false);



    //For Services
    const [ServicesOpen, setServicesOpen] = useState(false);
    const toggleServices = () => {
        setServicesOpen(!ServicesOpen);
    }

    //Menu option for smaller devices
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handlelogin = () => {
        signIn('google');
    }


    return (
        <div className='fixed top-0 left-0 w-full bg-[#080611] bg-opacity-90 backdrop-blur-md text-white p-5 z-50 flex flex-row items-center justify-between'>
            <Link href='/'>
                <div className='flex justify-start items-center lg:pl-10 lg:gap-4 gap-2 cursor-pointer'>
                    <img className='h-7 w-7' src='/images/logo.png' />
                    <p className='font-bold text-[#5340ff] text-2xl'>Verity</p>
                </div>
            </Link>

            <div className="hidden lg:flex flex-row gap-20 pr-10 justify-around">
                <div className="font-semibold cursor-pointer hover:bg-purple-950 p-2 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg">
                    Interview
                </div>
                <div className="font-semibold cursor-pointer relative group"> {/* Parent with group class */}
                    <div className='font-semibold cursor-pointer hover:bg-purple-950 p-2 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg'>
                        Services
                    </div> {/* Services button */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-[#080611] border border-[#5340ff] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"> {/* Dropdown box */}
                        <div className="flex flex-row p-4 gap-4">
                            {/* Section 1 */}
                            <Link href='/services/prepguide'>
                                <div className="flex flex-row items-center gap-3 justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg">
                                    <img className="h-5 w-5" src="/images/interview.svg" alt="Interview" />
                                    <div className="flex flex-col">
                                        <span className="text-base">Interview Prep Guide</span>
                                        <p className="text-xs text-gray-400">
                                            Interview prep kit here, btw I'm myself unemployed so read at your own risk, HaHa just kidding please read
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            {/* Section 2 */}
                            <Link href='/services/atsscore'>
                                <div className="flex flex-row items-center gap-3 justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg">
                                    <img className="h-5 w-5" src="/images/samples.svg" alt="ATS Score" />
                                    <div className="flex flex-col">
                                        <span className="text-base">ATS Score</span>
                                        <p className="text-xs text-gray-400">
                                            This is currently unavailable. Nonetheless, I am planning to just make a Gpt wrapper here lol
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link href='/services/resumetemplates'>
                                {/* Section 3 */}
                                <div className="flex flex-row items-center gap-3 justify-center transition-all duration-300 ease-in-out transform hover:scale-95 hover:-translate-y-1 shadow-md hover:shadow-lg">
                                    <img className="h-5 w-5" src="/images/score.svg" alt="Resume Templates" />
                                    <div className="flex flex-col">
                                        <span className="text-base">Resume Templates</span>
                                        <p className="text-xs text-gray-400">
                                            Oh yes this is reliable since I personally have selected few most used resumes. If you get job, Please refer me!!
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="font-semibold cursor-pointer hover:bg-purple-950 p-2 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-95 hover:-translate-y-1 shadow-md hover:shadow-lg">Jobs</div>
                {/* <div className="cursor-pointer hover:bg-slate-900 bg-[#5340FF] p-2 rounded-md"> */}
                {
                    session ? (
                        <div className='cursor-pointer hover:bg-slate-900 p-2 rounded-md flex flex-row gap-2'>
                            {/* User is already logged in */}
                            <img className="h-5 w-5" src="/images/user.png" alt="User" />
                            <p className='text-center'>{session.user?.name}</p>
                        </div>
                    ) : (
                        <div className='cursor-pointer hover:bg-slate-900 bg-[#5340FF] p-2 rounded-md'>
                            {/* User is not logged in */}
                            <button onClick={() => handlelogin()} className=' px-4 w-full h-full flex items-center justify-center rounded-lg'>login</button>
                        </div>
                    )
                }

                {/* </div> */}
            </div>


            {/* For mobile */}
            <button
                className="lg:hidden flex flex-col gap-1 justify-center items-center cursor-pointer"
                onClick={toggleMenu}
            >
                {/* <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span>
                <span className="block h-0.5 w-6 bg-white"></span> */}
                {menuOpen ? (<FaTimes className='text-white text-xl' />) : (<FaBars className='text-white text-xl' />)}
            </button>
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#080611] flex flex-col items-start px-10  gap-4 py-5 space-y-7 text-2xl lg:hidden">
                    <div className="font-semibold cursor-pointer border-b border-gray-400">Interview </div>

                    <div className="font-semibold cursor-pointer">
                        <div onClick={toggleServices} className='flex flex-row w-[70vw] justify-between'>
                            <span className='border-b border-gray-400'>Services</span>
                            {ServicesOpen ? (<FaChevronDown className="ml-2 inline-block text-lg" />) : (<FaChevronRight className="ml-2 inline-block text-lg" />)}
                        </div>

                        {ServicesOpen && (
                            <div className='mt-5 space-y-5'>

                                <div className="flex flex-row items-center">
                                    <div className='flex flex-row gap-2'>
                                        <img className='h-5 w-5' src='interview.svg' />
                                        <div className='flex flex-col'>
                                            <span className='text-base'>Interview Prep Guide</span>
                                            <p className='text-xs '>Interview prep kit here, btw I'm myself unemployed so read at your own risk, Haha just kidding please read</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row  items-center">
                                    <div className='flex flex-row gap-2'>
                                        <img className='h-5 w-5' src='score.svg' />
                                        <div className='flex flex-col'>
                                            <span className='text-base'>ATS Score</span>
                                            <p className='text-xs '>This is currently unavailable. Nonetheless, I am planning to just make a Gpt wrapper here lol</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row  items-center">
                                    <div className='flex flex-row gap-2'>
                                        <img className='h-5 w-5' src='samples.svg' />
                                        <div className='flex flex-col'>
                                            <span className='text-base'>Resume Templates</span>
                                            <p className='text-xs '>Oh yes this is reliable since I personally have selected few most used resumes. If you get job, Please refer me!!</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )}
                    </div>

                    <div className="font-semibold cursor-pointer border-b border-gray-400">Jobs</div>
                    <div className='flex flex-row gap-3 items-center'>
                        <p className='hover:bg-white'>Profile</p>
                        <Image
                            src="public/images/user.png"
                            alt="user"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            )}
            {/* Yaha tak sab mobile ke liye tha to ignore krrr bruhhhh */}

        </div>
    )
}

export default Header
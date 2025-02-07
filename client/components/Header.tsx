'use client';
import React, { useState, useEffect, useRef } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { FaBars, FaUser, FaTimes } from 'react-icons/fa';
import { signIn, signOut, useSession } from "next-auth/react"
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const { data: session, status } = useSession();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const data = {
        name: ['Interview Prep Guide', 'ATS Score', 'Resumes Templates'],
        photos: ['/images/logo.png', '/images/samples.svg', '/images/score.svg'],
        redir: ['/services/prepguide', '/services/atsscore', '/services/resumetemplates'],
        about: ["Interview prep kit here, btw I'm myself unemployed so read at your own risk, HaHa just kidding please read",
            "This is currently unavailable. Nonetheless, I am planning to just make a Gpt wrapper here lol",
            "Oh yes this is reliable since I personally have selected few most used resumes. If you get job, Please refer me!!"],
    }

    useEffect(() => {
        setIsAuthenticated(status === 'authenticated');
    }, [status]);

    const [logined, setLogined] = useState(false);

    //For Services
    const [ServicesOpen, setServicesOpen] = useState(false);
    const toggleServices = () => {
        setServicesOpen(!ServicesOpen);
    }

    //Menu option for smaller devices
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click is outside the menu and menu button
            if (
                menuRef.current && 
                !menuRef.current.contains(event.target as Node) && 
                !(event.target as HTMLElement).closest('button[aria-label="menu-toggle"]')
            ) {
                setMenuOpen(false);
                setServicesOpen(false);
            }
        };

        // Add event listener when menu is open
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const handlelogin = () => {
        signIn('google');
    }

    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsHidden(true);  // Hide when scrolling down
            } else {
                setIsHidden(false); // Show when scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 left-0 w-full bg-[#080611] bg-opacity-90 backdrop-blur-md text-white p-5 z-50 flex flex-row items-center justify-between transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>

            <Link href='/'>
                <div className='flex justify-start items-center lg:pl-10 lg:gap-4 gap-2 cursor-pointer'>
                    <img className='h-7 w-7' src='/images/logo.png' />
                    <p className='font-bold text-[#606064] text-2xl'>Verity</p>
                </div>
            </Link>

            <div className="hidden lg:flex flex-row gap-20 pr-10 justify-around">
                <div className="font-semibold cursor-pointer hover:bg-[#2f2f4d] p-2 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg">
                    Interview
                </div>

                <div className="font-semibold cursor-pointer relative group">
                    <div className='font-semibold cursor-pointer hover:bg-[#2f2f4d] p-2 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg'>
                        Services
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-[#080611] border border-[#1F52DC] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="flex flex-row p-4 gap-4">
                            {
                                data.name.map((item, index) => (
                                    <div key={index}>
                                        <Link href={data.redir[index]}>
                                            <div className="flex flex-row items-center gap-3 justify-center transition-all duration-300  transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg">
                                                <img className="h-5 w-5" src={data.photos[index]} alt="Interview" />
                                                <div className="flex flex-col">
                                                    <span className="text-base">{item}</span>
                                                    <p className="text-xs text-gray-400">
                                                        {data.about[index]}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Link className='font-semibold cursor-pointer hover:bg-[#1F52DC] px-2 rounded-md flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-95 hover:-translate-y-1 shadow-md hover:shadow-lg' href='/jobs'>
                    <p>Jobs</p>
                </Link>
                {
                    status === 'authenticated' ? (
                        <div className='cursor-pointer p-1 rounded-md flex flex-row gap-2 p-2'>
                            <img className="h-7 w-7 rounded-full hover:bg-[#8296F3]" src="/images/user.png" alt="User" />
                            <p className='hover:bg-[#8296F3] rounded-sm px-1 text-center'>{session.user?.name}</p>
                        </div>
                    ) : (
                        <div className='cursor-pointer hover:bg-slate-900 bg-[#5340FF] p-2 rounded-md'>
                            <button onClick={() => handlelogin()} className=' px-4 w-full h-full flex items-center justify-center rounded-lg'>
                                login
                            </button>
                        </div>
                    )
                }
            </div>

            {/* For mobile */}
            <button
                aria-label="menu-toggle"
                className="lg:hidden flex flex-col gap-1 justify-center items-center cursor-pointer"
                onClick={toggleMenu}
            >
                {menuOpen ? (<FaTimes className='text-white text-xl m-3' />) : (<FaBars className='text-white text-xl m-3' />)}
            </button>
            {menuOpen && (
                <div 
                    ref={menuRef}
                    className="absolute top-full left-0 w-full bg-[#080611] flex flex-col items-start px-10 gap-4 py-5 space-y-7 text-2xl lg:hidden"
                >
                    <div className="font-semibold cursor-pointer border-b border-gray-400">Interview </div>

                    <div className="font-semibold cursor-pointer">
                        <div onClick={toggleServices} className='flex flex-row w-[70vw] justify-between'>
                            <span className='border-b border-gray-400'>Services</span>
                            {ServicesOpen ? (<FaChevronDown className="ml-2 inline-block text-lg" />) : (<FaChevronRight className="ml-2 inline-block text-lg" />)}
                        </div>

                        {ServicesOpen && (
                            <div>
                                {
                                    data.name.map((item, idx) => (
                                        <div key={idx}>
                                            <div className='mt-5 space-y-5'>
                                                <Link href={data.redir[idx]}>
                                                    <div className="flex flex-row items-center">
                                                        <div className='flex flex-row gap-2'>
                                                            <img className='h-5 w-5' src={data.photos[idx]} />
                                                            <div className='flex flex-col'>
                                                                <span className='text-base'>{item}</span>
                                                                <p className='text-xs'>{data.about[idx]}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>

                    <Link href='/jobs'>
                        <div className="font-semibold cursor-pointer border-b border-gray-400">Jobs</div>
                    </Link>
                    <div className='flex flex-row gap-3 items-center'>
                        <Image
                            src="/images/user.png"
                            alt="user"
                            width={20}
                            height={20}
                        />
                        <p className='hover:bg-white'>Profile</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-[#090909] flex flex-col pt-32'>
            <div className='flex flex-row'>

                <div className='flex flex-row w-[30%] gap-5 items-center justify-center'>
                    <img className='h-10 w-10' src='/images/logo.png' />
                    <p className='font-bold text-[#5340ff] text-2xl'>Verity</p>
                </div>
                <div className='flex flex-row w-full justify-evenly'>
                    <div className="flex flex-col space-y-5">
                        <h1 className='mt-10 font-bold text-[#384bdb] text-2xl'>Products</h1>
                        <p className='cursor-pointer text-gray-300'>Interviews</p>
                        <p className='cursor-pointer text-gray-300'>Proctoring</p>
                        <p className='cursor-pointer text-gray-300'>Parsing</p>
                        <p className='cursor-pointer text-gray-300'>Assesement</p>
                        <p className='cursor-pointer text-gray-300'>Evaluation</p>
                        <p className='cursor-pointer text-gray-300'>Leaderboard</p>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h1 className='mt-10 font-bold text-[#384bdb] text-2xl'>Learn/Docs</h1>
                        <p className='cursor-pointer text-gray-300'>Blogs</p>
                        <p className='cursor-pointer text-gray-300'>Compute</p>
                        <p className='cursor-pointer text-gray-300'>Research</p>
                        <p className='cursor-pointer text-gray-300'>Data</p>
                        <p className='cursor-pointer text-gray-300'>Articles</p>
                        <p className='cursor-pointer text-gray-300'>Infra</p>
                        <p className='cursor-pointer text-gray-300'>Latest Trends</p>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h1 className='mt-10 font-bold text-[#384bdb] text-2xl'>Company</h1>
                        <p className='cursor-pointer text-gray-300'>About us</p>
                        <p className='cursor-pointer text-gray-300'>Career</p>
                        <p className='cursor-pointer text-gray-300'>Partner with us</p>
                        <p className='cursor-pointer text-gray-300'>Privacy</p>
                        <p className='cursor-pointer text-gray-300'>Terms</p>
                        <p className='cursor-pointer text-gray-300'>Help</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#090909] flex items-center justify-center text-sm text-gray-300 py-20">
                © Copyright 2025 Verity, Inc. All Rights Reserved
            </div>

        </footer>
    )
}

export default Footer
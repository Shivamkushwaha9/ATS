'use client'

import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useInView } from '@/app/hooks/useInView'

const Products = () => {
    const { ref: headerRef, isInView: headerInView } = useInView()
    const { ref: block1Ref, isInView: block1InView } = useInView()
    const { ref: block2Ref, isInView: block2InView } = useInView()
    const { ref: block3Ref, isInView: block3InView } = useInView()

    return (
        <div className="min-h-screen bg-gradient-to-b to-[#000000] from-[#000000] via-[#05356B] flex flex-col items-center justify-center text-white p-8">
            <h1
                ref={headerRef}
                className={`text-4xl lg:text-6xl font-bold mb-8 text-center w-[70vw] opacity-0 ${headerInView ? 'animate-slide-left' : ''
                    }`}
            >
                Highly Interconnected trading apps and infrastructure
            </h1>

            {/* First Block */}
            <div ref={block1Ref} className='lg:w-[85vw] w-[95vw] border lg:pl-10 flex flex-col lg:flex-row justify-between my-10 rounded-xl p-3'>
                <div className='flex flex-col space-y-3 justify-evenly pb-5 lg:items-start items-center lg:w-[70%]'>
                    {/* for smaller devices */}
                    <div className={`opacity-0 lg:hidden md:hidden w-full flex items-center justify-center ${block1InView ? 'animate-slide-right [animation-delay:200ms]' : ''}`}>
                        <Image
                            className='rounded-xl w-full max-w-[400px]'
                            src='/prod1.webp'
                            alt='prod1'
                            height={360}
                            width={300}
                        />
                    </div>

                    <h1 className={`text-3xl font-bold w-full opacity-0 text-center lg:text-left lg:w-[45%] ${block1InView ? 'animate-slide-left' : ''
                        }`}>
                        Data driven Insights: Build Strategies with Sharksigma
                    </h1>

                    <p className={`text-lg w-full text-center lg:text-left text-gray-300 opacity-0 lg:w-[45%] ${block1InView ? 'animate-slide-left [animation-delay:200ms]' : ''
                        }`}>
                        Sharksigma empowers users with customizable strategies...
                    </p>

                    <div className={`flex flex-row items-center justify-center gap-2 bg-[#5340FF] w-fit p-2 rounded-lg opacity-0 ${block1InView ? 'animate-slide-bottom [animation-delay:400ms]' : ''
                        }`}>
                        <button className='p-2 rounded-lg text-center font-bold w-full flex items-center justify-center text-white'>
                            Get to know more about us!!
                        </button>
                        <FaChevronRight className='text-white' />
                    </div>
                </div>

                <div className={`hidden lg:block opacity-0 ${block1InView ? 'animate-slide-right [animation-delay:200ms]' : ''}`}>
                    <Image src='/prod1.webp' alt='prod1' height={560} width={500} />
                </div>
            </div>

            {/* Second Block */}
            <div ref={block2Ref} className='lg:w-[85vw] w-[95vw] border lg:pl-10 flex justify-between my-10 rounded-xl p-3'>
                <div className='flex flex-col lg:flex-row space-y-3 justify-between pb-5 lg:items-start items-center w-full'>

                    {/* for smaller devices */}
                    <div className={`opacity-0 w-full lg:w-1/2 flex items-center justify-center ${block2InView ? 'animate-slide-right [animation-delay:200ms]' : ''}`}>
                        <Image
                            className='rounded-xl w-full max-w-[400px]'
                            src='/prod1.webp'
                            alt='prod1'
                            height={460}
                            width={400}
                        />
                    </div>

                    <div className='flex flex-col items-center lg:items-start h-full lg:pl-20 justify-evenly lg:w-1/2'>
                        <h1 className={`text-3xl font-bold w-full opacity-0 text-center lg:text-left lg:w-[80%] ${block2InView ? 'animate-slide-left' : ''}`}>
                            Second block
                        </h1>

                        <p className={`text-lg w-full text-center lg:text-left text-gray-300 opacity-0 lg:w-[80%] ${block2InView ? 'animate-slide-left [animation-delay:200ms]' : ''}`}>
                            Sharksigma empowers users with customizable strategies, and real-time market insights...ers with customizable strategies, and real-time market insights...ers with customizable strategies, and real-time market insights...ers with customizable strategies, and real-time market insights...
                        </p>

                        <div className={`flex flex-row items-center justify-center gap-2 bg-[#5340FF] w-fit p-2 rounded-lg opacity-0 ${block2InView ? 'animate-slide-bottom [animation-delay:400ms]' : ''}`}>
                            <button className='p-2 rounded-lg text-center font-bold w-full flex items-center justify-center text-white'>Get to know more about us!!</button>
                            <FaChevronRight className='text-white' />
                        </div>
                    </div>

                </div>
                <div className={`hidden ${block2InView ? 'animate-slide-right [animation-delay:200ms]' : ''}`}>
                    <Image src='/prod1.webp' alt='prod1' height={560} width={500} />
                </div>
            </div>

            {/* Third Block */}
            <div ref={block3Ref} className='lg:w-[85vw] w-[95vw] border lg:pl-10 flex flex-col lg:flex-row justify-between my-10 rounded-xl p-3'>
                <div className='flex flex-col space-y-3 justify-evenly pb-5 lg:items-start items-center w-full'>
                    {/* for smaller devices */}
                    <div className={`opacity-0 lg:hidden md:hidden w-full flex items-center justify-center ${block3InView ? 'animate-slide-right [animation-delay:200ms]' : ''}`}>
                        <Image
                            className='rounded-xl w-full max-w-[400px]'
                            src='/prod1.webp'
                            alt='prod1'
                            height={360}
                            width={300}
                        />
                    </div>

                    <h1 className={`text-3xl font-bold w-full opacity-0 text-center lg:text-left lg:w-[45%] ${block3InView ? 'animate-slide-left' : ''
                        }`}>
                        Data driven Insights: Build Strategies with Sharksigma
                    </h1>

                    <p className={`text-lg w-full text-center lg:text-left text-gray-300 opacity-0 lg:w-[45%] ${block3InView ? 'animate-slide-left [animation-delay:200ms]' : ''
                        }`}>
                        Sharksigma empowers users with customizable strategies... Sharksigma empowers users with customizable strategies... Sharksigma empowers users with customizable strategies... Sharksigma empowers users with customizable strategies... Sharksigma empowers users with customizable strategies...
                    </p>

                    <div className={`flex flex-row items-center justify-center gap-2 bg-[#5340FF] w-fit p-2 rounded-lg opacity-0 ${block3InView ? 'animate-slide-bottom [animation-delay:400ms]' : ''
                        }`}>
                        <button className='p-2 rounded-lg text-center font-bold w-full flex items-center justify-center text-white'>
                            Get to know more about us!!
                        </button>
                        <FaChevronRight className='text-white' />
                    </div>
                </div>

                <div className={`hidden lg:block opacity-0 ${block3InView ? 'animate-slide-right [animation-delay:200ms]' : ''}`}>
                    <Image src='/prod1.webp' alt='prod1' height={560} width={500} />
                </div>
            </div>
        </div>
    )
}

export default Products
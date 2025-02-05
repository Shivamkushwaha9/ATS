'use client';

import { useState, useEffect } from 'react';
import {sections } from '@/data/section';

export default function BlogPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='flex min-h-screen flex-row mt-[72px] bg-white'>
      {/* Left Side Mapper */}
      <div className="hidden lg:block mt-28 w-[20%] lg:ml-8 lg:p-4 p-2 fixed top-0 h-screen">
        <h1 className='w-fit mb-5 font-semibold text-xl text-gray-400'>Table of contents</h1>
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-[7px] top-2 h-full w-0.5 bg-gray-600"
            style={{ height: `calc(100% - 1rem)` }}
          />
          {/* Sections with Circles */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <div
                    className={`w-4 h-4 rounded-full border-2 relative z-10 ${
                      activeSection === section.id
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-white border-gray-400'
                    }`}
                  />
                </div>
                <span className="ml-2 text-gray-700 dark:text-gray-300 break-words">
                  {section.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Main content : Right Side Content */}
      <div className="absolute lg:w-[50%] lg:p-4 md:p-3 ml-3 md:ml-[10%] lg:ml-[20%]">
         <h1 className='relative pl-8 pt-8 text-2xl text-gray-400'>Interview tips</h1>
         <h1 className='relative pl-8 bg-white text-5xl font-bold w-[80%] mb-4 '>The Ultimate Job Interview Preparation Guide</h1>
         <div className='flex flex-row relative pl-8 items-center justify-center w-fit mb-4'>
            <img className='relative h-10 w-10 mr-5 rounded-full' src="/images/logo.png" alt="" />
            <div className='flex flex-col justify-between'>
               <p className='text-sm'>VerityAI Team</p>
               <p className='text-base'>VerityAI Team | Feb 3, 2025 | 12:00 AM</p>
            </div>
         </div>
         
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="relative mb-8 pl-8 p-6 border rounded-md bg-white">
            {section.content}
          </section>
        ))}
      </div>
    </div>
  );
}
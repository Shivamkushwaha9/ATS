// @ts-nocheck
'use client';
import Footer from '@/components/landingpage/Footer';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ProfileCard from '@/components/profile/ProfileCard';
import LogoutButton from '@/components/shared/LogoutButton';
import {
   ProfileSummary,
   Education,
   KeySkills,
   Experience,
   Projects,
   Resume,
   Preferences,
   Language,
} from '@/components/profile/ProfileSections';

const ProfilePage = () => {
   // Track the currently active section
   const [activeSection, setActiveSection] = useState('profileSummary');

   // Create refs for each section
   const sectionRefs = {
      profileSummary: useRef<HTMLDivElement>(null),
      education: useRef<HTMLDivElement>(null),
      keySkills: useRef<HTMLDivElement>(null),
      experience: useRef<HTMLDivElement>(null),
      projects: useRef<HTMLDivElement>(null),
      resume: useRef<HTMLDivElement>(null),
      preferences: useRef<HTMLDivElement>(null),
      language: useRef<HTMLDivElement>(null),
   };

   // Intersection Observer to update active section as you scroll
   useEffect(() => {
      const observerOptions = {
         root: null,
         rootMargin: '0px',
         threshold: 0.6, // 60% of the section is visible
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setActiveSection(entry.target.id);
            }
         });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      Object.values(sectionRefs).forEach((ref) => {
         if (ref.current) observer.observe(ref.current);
      });

      return () => observer.disconnect();
   }, []);

   // Smooth scroll to the corresponding section when a sidebar item is clicked
   const handleClick = (sectionId: string) => {
      sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
   };

   const data = {
      name: ["Profile Summary", "Education", "Key Skills", "Experience", "Projects", "Resume", "Preferences", "Language"],
      section: ["profileSummary", "education", "keySkills", "experience", "projects", "resume", "preferences", "language"]
   }

   return (
      <div className="bg-[#F8F9FA]">
         {/* HEADER */}
         <div className="bg-gray-800 p-5 px-12 flex justify-between">
            <Link href="/">
               <div className="flex justify-start items-center lg:pl-10 lg:gap-4 gap-2 cursor-pointer">
                  <img className="h-7 w-7" src="/images/logo.png" alt="Logo" />
                  <p className="font-bold text-[#606064] text-2xl">Verity</p>
               </div>
            </Link>
            <span>
               <LogoutButton />
            </span>
         </div>

         {/* PROFILE CARD */}
         <ProfileCard />

         {/* MAIN CONTENT */}
         <div className="flex flex-col lg:flex-row lg:px-10">
            {/* SIDEBAR */}
            <div className="lg:w-[20vw] w-full lg:mr-8">
               <div className="bg-white p-4 lg:sticky top-20 shadow-md z-50">
                  <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
                  {
                     data.section.map((item, idx) => (
                        <ul className="space-y-2">
                           <li
                              className={`cursor-pointer  ${activeSection === item
                                    ? 'font-bold text-blue-600'
                                    : 'text-gray-700'
                                 }`}
                              onClick={() => handleClick(item)}
                           >
                              {data.name[idx]}
                           </li>
                        </ul>
                     ))
                  }
               </div>
            </div>

            {/* CONTENT SECTIONS */}
            <div className="flex-1 space-y-16 p-4">
               <section id="profileSummary" ref={sectionRefs.profileSummary}>
                  <ProfileSummary />
               </section>
               <section id="education" ref={sectionRefs.education}>
                  <Education />
               </section>
               <section id="keySkills" ref={sectionRefs.keySkills}>
                  <KeySkills />
               </section>
               <section id="experience" ref={sectionRefs.experience}>
                  <Experience />
               </section>
               <section id="projects" ref={sectionRefs.projects}>
                  <Projects />
               </section>
               <section id="resume" ref={sectionRefs.resume}>
                  <Resume />
               </section>
               <section id="preferences" ref={sectionRefs.preferences}>
                  <Preferences />
               </section>
               <section id="language" ref={sectionRefs.language}>
                  <Language />
               </section>
            </div>
         </div>

         {/* FOOTER */}
         <Footer />
      </div>
   );
};

export default ProfilePage;

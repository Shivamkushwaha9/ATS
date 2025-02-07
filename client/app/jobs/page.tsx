'use client';
import React, { useState } from 'react';
import { FaChevronUp, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Filters {
   employment: string[];
   seniority: string[];
   salary: string[];
}

export default function Jobs() {
   const [showFilters, setShowFilters] = useState(false);
   const [searchTerm, setSearchTerm] = useState('');
   const [location, setLocation] = useState('');
   const [filters, setFilters] = useState<Filters>({
      employment: [],
      seniority: [],
      salary: [],
   });

   const categories = {
      employment: {
         title: "Types of Employment",
         options: [
            { label: "Full Time", count: 120 },
            { label: "Part Time", count: 80 },
            { label: "Remote", count: 60 },
            { label: "Internships", count: 50 },
         ],
      },
      seniority: {
         title: "Seniority Level",
         options: [
            { label: "Fresher", count: 100 },
            { label: "Entry Level", count: 90 },
            { label: "Middle Level", count: 70 },
            { label: "Senior Level", count: 40 },
         ],
      },
      salary: {
         title: "Salary Range",
         options: [
            { label: "$0 - $50K", count: 30 },
            { label: "$50K - $100K", count: 80 },
            { label: "$100K - $150K", count: 60 },
            { label: "$150K+", count: 40 },
         ],
      },
   };

   const handleToggle = (
      category: keyof Filters,
      label: string,
      checked: boolean | 'indeterminate'
   ) => {
      if (checked === 'indeterminate') return;
      setFilters((prev) => ({
         ...prev,
         [category]: checked
            ? [...prev[category], label]
            : prev[category].filter((item) => item !== label),
      }));
   };

   const handleSearch = () => {
      // Implement search logic
      console.log('Searching:', { searchTerm, location, filters });
   };

   return (
      <div className='mt-[96px] px-4 md:px-8'>
         {/* Search Section */}
         <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row items-center w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
               <div className="flex-1 w-full">
                  <div className="relative flex items-center h-14">
                     <FaSearch className="absolute left-4 h-5 w-5 text-gray-400" />
                     <input
                        className="w-full h-full pl-12 pr-4 focus:outline-none text-gray-700 placeholder-gray-400"
                        placeholder="Job title, keywords..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                  </div>
               </div>

               <div className="w-px h-8 bg-gray-200 mx-4 hidden md:block" />

               <div className="flex-1 w-full">
                  <div className="relative flex items-center h-14">
                     <FaMapMarkerAlt className="absolute left-4 h-5 w-5 text-gray-400" />
                     <input
                        className="w-full h-full pl-12 pr-4 focus:outline-none text-gray-700 placeholder-gray-400"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                     />
                  </div>
               </div>

               <Button
                  onClick={handleSearch}
                  className="w-full md:w-auto h-14 px-8 rounded-none bg-blue-600 hover:bg-blue-700 text-lg"
               >
                  Search
               </Button>
            </div>
         </div>

         <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-8'>
            
            {/* Filters Sidebar */}
            <div className='hidden lg:block w-full md:w-72 space-y-6'>
               <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  {Object.entries(categories).map(([categoryKey, { title, options }]) => (
                     <div key={categoryKey} className="mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
                        <ul className="space-y-3">
                           {options.map(({ label, count }) => (
                              <li
                                 key={label}
                                 className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                                 onClick={() => handleToggle(
                                    categoryKey as keyof Filters,
                                    label,
                                    !filters[categoryKey as keyof Filters].includes(label)
                                 )}
                              >
                                 <div className="flex items-center gap-3">
                                    <Checkbox
                                       checked={filters[categoryKey as keyof Filters].includes(label)}
                                       onCheckedChange={(checked) =>
                                          handleToggle(categoryKey as keyof Filters, label, checked)
                                       }
                                    />
                                    <span className="text-gray-700">{label}</span>
                                 </div>
                                 <span className="text-sm text-gray-500">{count}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                     Apply Filters
                  </Button>
               </div>
            </div>


            {/* Job Listings */}
            <div className="flex-1 space-y-4">
               {[...Array(5)].map((_, i) => (
                  <div key={i} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                     <div className="flex items-start justify-between">
                        <div>
                           <h3 className="text-xl font-semibold text-gray-900">Senior Software Engineer</h3>
                           <p className="text-gray-600 mt-1">Tech Corp Inc.</p>
                           <div className="flex flex-wrap gap-2 mt-3">
                              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Full Time</span>
                              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Remote</span>
                              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">$120K - $150K</span>
                           </div>
                        </div>
                        <Button className="hidden sm:flex gap-2">
                           Apply Now
                           <FaChevronUp className="rotate-90 transform" />
                        </Button>
                     </div>
                     <p className="mt-4 text-gray-600">We're looking for a senior software engineer to join our growing team. You'll work on cutting-edge projects using modern technologies...</p>
                     <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-gray-500">Posted 2d ago</span>
                        <Button className="sm:hidden mt-4 w-full">
                           Apply Now
                        </Button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
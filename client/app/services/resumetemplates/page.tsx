'use client';

import Footer from '@/components/landingpage/Footer';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Page = () => {
   const data = {
      pdfname: [
         "Jake's Resume",
         'Jakes Anonymous Resume',
         'Deedy Resume Reversed',
         'RenderCV sb2nov Theme',
         'RenderCV Classic Theme',
         "MTeck's Resume",
         'John Miller CV',
         'Gojo Sotaru',
         'Elegant resume template'
      ],
      icon: [
         '/pdfs/pdfimages/1.jpeg',
         '/pdfs/pdfimages/2.jpeg',
         '/pdfs/pdfimages/3.jpeg',
         '/pdfs/pdfimages/4.jpeg',
         '/pdfs/pdfimages/5.jpeg',
         '/pdfs/pdfimages/6.jpeg',
         '/pdfs/pdfimages/7.jpeg',
         '/pdfs/pdfimages/8.jpeg',
         '/pdfs/pdfimages/9.jpeg'
      ],
      link: [
         '/pdfs/pdffiles/1.pdf',
         '/pdfs/pdffiles/2.pdf',
         '/pdfs/pdffiles/3.pdf',
         '/pdfs/pdffiles/4.pdf',
         '/pdfs/pdffiles/5.pdf',
         '/pdfs/pdffiles/6.pdf',
         '/pdfs/pdffiles/7.pdf',
         '/pdfs/pdffiles/8.pdf',
         '/pdfs/pdffiles/9.pdf'
      ]
   }

   const [searchTerm, setSearchTerm] = useState('')
   const [currentPage, setCurrentPage] = useState(1)
   const [filteredData, setFilteredData] = useState([])
   const itemsPerPage = 6

   // Search and filter functionality
   useEffect(() => {
      const filtered = data.pdfname.map((name, index) => ({
         name,
         icon: data.icon[index],
         link: data.link[index]
      })).filter(item =>
         item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredData(filtered)
      setCurrentPage(1) // Reset to first page when searching
   }, [searchTerm])

   // Pagination
   const totalPages = Math.ceil(filteredData.length / itemsPerPage)
   const indexOfLastItem = currentPage * itemsPerPage
   const indexOfFirstItem = indexOfLastItem - itemsPerPage
   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

   const handleDownload = (link, name) => {
      const downloadLink = document.createElement('a')
      downloadLink.href = link
      downloadLink.download = `${name}.pdf`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
   }

   return (
      <div className='mt-[72px]'>
         <div className="relative w-full h-[250px] md:h-[300px]">
            <img
               className='h-full w-full object-cover bg-[#DBEAFE]'
               src='/images/resumecoverimgmob.png'
               alt="Resume cover"
            />
            <div className='absolute inset-0 p-4 md:p-10 bg-black bg-opacity-30'>
               <h1 className='text-white font-semibold text-xl md:text-3xl'>
                  Resume Templates
               </h1>
               <p className='text-white mt-4 md:mt-10 lg:w-[60%] md:w-[50%] w-[70vw] text-sm md:text-base'>
                  Each resume template is designed to follow the exact rules you need to get hired faster. Use our resume templates and get free access to 18 more career tools!
               </p>
               <div className='flex flex-row mt-5 items-center justify-start lg:gap-4 gap-3 text-white'>
                  <Link href='/'>
                     <span className='cursor-pointer hover:text-gray-200'>Home</span>
                  </Link>
                  <FaChevronRight />
                  <span className='underline cursor-pointer hover:text-gray-200'>Resume Templates</span>
               </div>
            </div>
         </div>

         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
               <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
                  Explore Templates
               </h1>

               <div className="relative max-w-md mx-auto mb-12 md:mb-16">
                  <input
                     className="w-full h-12 px-6 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none shadow-sm pl-12"
                     placeholder="Search templates..."
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg
                     className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                  >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
               </div>

               {/* Templates Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {currentItems.map((item, index) => (
                     <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <div className="aspect-w-4 aspect-h-3"> {/* Fixed aspect ratio container */}
                           <img
                              src={item.icon}
                              alt={item.name}
                              className="w-full h-full object-contain"
                           />
                        </div>

                        <div className="p-4 md:p-6">
                           <h3 className="text-lg font-semibold text-gray-800 mb-4">
                              {item.name}
                           </h3>

                           <button
                              onClick={() => handleDownload(item.link, item.name)}
                              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                           >
                              <span>Download</span>
                              <svg
                                 className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-200"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                              >
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Pagination */}
               {totalPages > 1 && (
                  <div className="flex justify-center items-center space-x-2 mt-8 md:mt-12">
                     <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg ${currentPage === 1
                              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                           }`}
                     >
                        Previous
                     </button>

                     {[...Array(totalPages)].map((_, i) => (
                        <button
                           key={i}
                           onClick={() => setCurrentPage(i + 1)}
                           className={`w-10 h-10 rounded-lg ${currentPage === i + 1
                                 ? 'bg-blue-500 text-white'
                                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                              }`}
                        >
                           {i + 1}
                        </button>
                     ))}

                     <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg ${currentPage === totalPages
                              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                           }`}
                     >
                        Next
                     </button>
                  </div>
               )}
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Page
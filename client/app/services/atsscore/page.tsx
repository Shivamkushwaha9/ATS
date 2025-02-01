'use client';
import React, { useState } from 'react'

const page = () => {
   const [file, setFile] = useState(null);
   const [error, setError] = useState('');

   const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile && selectedFile.type === 'application/pdf') {
         setFile(selectedFile);
         setError('');
      } else {
         setFile(null);
         setError('Please upload a valid PDF file.');
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!file) {
         setError('Please upload a PDF file.');
         return;
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
         const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
         });

         if (response.ok) {
            alert('File uploaded successfully!');
         } else {
            alert('File upload failed.');
         }
      } catch (error) {
         console.error('Error uploading file:', error);
         alert('Error uploading file.');
      }
   };
   return (
      <div className='mt-[72px]'>
         {/* Upload wala section */}
         <div className='flex flex-row justify-between mt-40'>
            <div className="relative ml-20 p-10">
               <h2>ATS Scorer</h2>
               <h1>Is your resume good enough?</h1>
               <p>A free and fast AI resume checker doing 16 crucial checks to ensure your resume is ready to perform and get you interview callbacks.</p>
               {/* The resume uploader container */}
               <div className='relative p-5 bg-gray-200 shadow-lg w-64 h-48 overflow-hidden'>
                  <div className='relative w-full h-full bg-white border-2 border-dashed border-black'>
                     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                        <form onSubmit={handleSubmit}>
                           <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
                              <input
                                 type="file"
                                 accept="application/pdf"
                                 onChange={handleFileChange}
                                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                           </div>
                           <button
                              type="submit"
                              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           >
                              Upload
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <img className='h-96 w-96' src='/images/prod1.webp' />
            </div>
         </div>
      </div>
   )
}

export default page
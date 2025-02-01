// app/services/atsscore/page.tsx
'use client'
import { useState } from 'react'

export default function ATSScore() {
   const [file, setFile] = useState<File | null>(null)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState<string | null>(null)

   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const uploadedFile = e.target.files?.[0]
      if (uploadedFile) {
         setFile(uploadedFile)
      }
   }

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!file) return

      setLoading(true)
      setError(null)

      const formData = new FormData()
      formData.append('file', file)

      try {
         const response = await fetch(
            'http://localhost:3001/api/v1/scorer',
            {
               method: 'POST',
               credentials: 'include',
               body: formData,
               headers: {
                  // Don't set Content-Type header when sending FormData
                  // The browser will set it automatically with the correct boundary
                  'Accept': 'application/json',
               },
               mode: 'cors', // Explicitly set CORS mode
            }
         )

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
         }

         const data = await response.json()
         console.log('Upload successful:', data)
      } catch (err) {
         console.error('Upload error:', err)
         setError(err instanceof Error ? err.message : 'Upload failed')
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className="max-w-xl mt-[72px] mx-auto p-6 border border-gray-300 rounded-lg">

         <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg">
               <input
                  type="file"
                  onChange={handleFileUpload}
                  className="w-full"
                  accept=".pdf,.doc,.docx"
               />
            </div>
            

            <button
               type="submit"
               disabled={!file || loading}
               className={`w-full py-2 px-4 rounded ${loading
                  ? 'bg-gray-400'
                  : 'bg-blue-500 hover:bg-blue-600'
                  } text-white`}
            >
               {loading ? 'Uploading...' : 'Upload Resume'}
            </button>

            {error && (
               <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
         </form>
      </div>
   )
}
'use client';

import React, { useState, useCallback } from 'react';
import { FileUp, CheckCircle2, FileText, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Footer from '@/components/landingpage/Footer';

export default function ATSScore() {
   const [file, setFile] = useState<File | null>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [uploadProgress, setUploadProgress] = useState(0);

   const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const uploadedFile = e.target.files?.[0];
      if (uploadedFile) {
         setFile(uploadedFile);
         setError(null);
      }
   }, []);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!file) return;

      setLoading(true);
      setError(null);
      setUploadProgress(0);

      const formData = new FormData();
      formData.append('file', file);

      try {
         const response = await fetch(
            'http://localhost:3001/api/v1/scorer',
            {
               method: 'POST',
               credentials: 'include',
               body: formData,
               headers: {
                  'Accept': 'application/json',
               },
               mode: 'cors',
               // Simulate upload progress (since native fetch doesn't support progress)
               xhr: (xhr) => {
                  xhr.upload.onprogress = (event) => {
                     if (event.lengthComputable) {
                        const percentComplete = (event.loaded / event.total) * 100;
                        setUploadProgress(percentComplete);
                     }
                  };
               }
            }
         );

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }

         const data = await response.json();
         console.log('Upload successful:', data);
      } catch (err) {
         console.error('Upload error:', err);
         setError(err instanceof Error ? err.message : 'Upload failed');
      } finally {
         setLoading(false);
      }
   };

   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
   };

   const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const droppedFile = e.dataTransfer.files?.[0];
      if (droppedFile) {
         setFile(droppedFile);
         setError(null);
      }
   };

   return (
      <div className='mt-[72px]'>

         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl hover:shadow-3xl transition-shadow duration-300">
               <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-blue-600 flex items-center justify-center gap-2">
                     <FileText className="w-8 h-8" />
                     ATS Resume Score
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-2">
                     Upload your resume to get an Applicant Tracking System (ATS) score
                  </p>
               </CardHeader>

               <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                     <div
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className={`
               border-2 border-dashed rounded-lg p-6 text-center 
               transition-all duration-300 
               ${file
                              ? 'border-green-500 bg-green-50'
                              : 'border-blue-300 bg-blue-100 hover:border-blue-500'
                           }
               `}
                     >
                        <input
                           type="file"
                           onChange={handleFileUpload}
                           className="hidden"
                           id="file-upload"
                           accept=".pdf,.doc,.docx"
                        />
                        <label
                           htmlFor="file-upload"
                           className="cursor-pointer flex flex-col items-center space-y-2"
                        >
                           <FileUp className="w-12 h-12 text-blue-500" />
                           {file ? (
                              <div className="flex items-center gap-2">
                                 <CheckCircle2 className="w-5 h-5 text-green-500" />
                                 <span className="text-sm text-gray-700">{file.name}</span>
                              </div>
                           ) : (
                              <>
                                 <p className="text-sm text-gray-600">
                                    Drag and drop or click to upload your resume
                                 </p>
                                 <span className="text-xs text-gray-500">
                                    (.pdf, .doc, .docx formats)
                                 </span>
                              </>
                           )}
                        </label>
                     </div>

                     {loading && (
                        <div className="space-y-2">
                           <Progress value={uploadProgress} className="w-full" />
                           <p className="text-sm text-gray-600 text-center flex items-center justify-center">
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Uploading... {Math.round(uploadProgress)}%
                           </p>
                        </div>
                     )}

                     {error && (
                        <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
                           {error}
                        </div>
                     )}

                     <Button
                        type="submit"
                        disabled={!file || loading}
                        className="w-full"
                        variant={file && !loading ? "default" : "secondary"}
                     >
                        {loading ? (
                           <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Uploading...
                           </>
                        ) : (
                           'Get ATS Score'
                        )}
                     </Button>
                  </form>
               </CardContent>
            </Card>
         </div>
         <Footer/>
      </div>
   );
}
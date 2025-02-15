//@ts-nocheck
'use client';

import { useState, useRef } from 'react';
import { Timeline } from "../ui/timline";

export const TimelineDemo = () => {
    const data = [
        {
            title: "Resume",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal">
                        You&apos;ll have to submit the resume you're applying with, It will help us evaluate and to make sure the interview is in accordance with the content mentioned in resume.
                    </p>
                </div>
            ),
        },
        {
            title: "JD",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal">
                        Providing job description helps us in tailoring questions as per needs of recruiters and helps you get more ready for interviews and dealing with commonly asked questions which might help you further.
                    </p>

                </div>
            ),
        },
        {
            title: "Project details",
            content: (
                <div>
                    <p className="text-neutral-600 dark:text-neutral-200 text-base font-normal">
                        Project details are of one the main aspects of hiring for any roles which showcases our experties and abilities. You can give your project details here and based on that we can assess your knowledge and evaluate which could help you in prior interviews.
                    </p>

                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    )
}

export const InterviewCard = () => (
    <div className='lg:w-[95vw] flex flex-col lg:flex-row justify-between items-start lg:m-2'>
        <div className='lg:m-14 m-4 md:m-12 md:w-[80%] flex flex-col border-b pb-2'>
            <h1 className='text-6xl font-bold w-full'>
                Ready to test your <span className='text-blue-300'>skills?</span>
            </h1>
            <h2 className='mt-5 text-base text-gray-600 w-full'>
                Our Advanced Multi AI Agents system allows for efficienct Interviewing based considering many factors such as your projects, JD, Resumes etc which helps in Initial Screening round and alleviates the keyword based matchmaking.
            </h2>
            <img
                src='/images/interview1.png'
                className='md:h-[400px] md:min-w-[800px] lg:hidden'
            />
            <button className="p-[3px] mt-5 relative w-fit">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                <div className="px-8 py-2  bg-[#000] rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
                    Get started!!
                </div>
            </button>
            <div className="flex flex-row items-center mt-5">
                <p className="hover:text-blue-700 hover:underline cursor-pointer">
                    Already have a interview Scheduled?
                </p>
                &nbsp;
                <p className="underline text-sm flex text-blue-600">know more</p>
            </div>
        </div>
        <img
            src='/images/interview1.png'
            className='h-[400px] w-[900px] hidden lg:block'
        />
    </div>
)


export const InterviewResumeUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check if file is PDF
            if (file.type === 'application/pdf') {
                setSelectedFile(file);
            } else {
                alert('Please upload a PDF file only');
                event.target.value = null;
            }
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const file = event.dataTransfer.files[0];
        if (file.type === 'application/pdf') {
            setSelectedFile(file);
        } else {
            alert('Please upload a PDF file only');
        }
    };

    const handleAreaClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="max-w-6xl w-[100vw] mx-auto p-20 sm:p-6 lg:p-8 mt-20 border rounded-xl">
            {/* Header Section */}
            <div className="mb-8 lg:mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-4">
                   1. Upload Your Professional Resume
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                    Showcase your skills and experience by uploading your resume. 
                    We support PDF format to maintain your document's formatting.
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                {/* Upload Section */}
                <div className="w-full lg:flex-1">
                    <div 
                        onClick={handleAreaClick}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className="border-2 border-dashed border-blue-300 rounded-xl p-6 sm:p-8 
                            hover:border-blue-500 transition-all duration-300 bg-gray-50 
                            cursor-pointer"
                    >
                        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
                            <img 
                                src="/images/resumeuploader.png" 
                                alt="Resume Upload" 
                                className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                            />
                            <div className="text-center">
                                <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                                    {selectedFile 
                                        ? `Selected: ${selectedFile.name}`
                                        : 'Drag & Drop your resume here'
                                    }
                                </p>
                                <p className="text-gray-500 text-sm sm:text-base mb-4">
                                    Supported format: PDF only
                                </p>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept=".pdf"
                                    className="hidden"
                                />
                                <button 
                                    className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white 
                                        rounded-lg hover:bg-blue-700 transition-colors 
                                        text-base sm:text-lg font-medium shadow-lg 
                                        hover:shadow-xl"
                                >
                                    Select File
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Text */}
                <div className="w-full lg:flex-1 text-center lg:text-left">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            Let your profile{' '}
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 
                                bg-clip-text text-transparent">
                                stand out
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
            <p className='text-center mt-8'>
            Hello there
            </p>
        </div>
    )
}


export const JobDescriptionInput = () => {
    const [jobDescription, setJobDescription] = useState('');

    const handleTextChange = (e) => {
        setJobDescription(e.target.value);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 sm:p-8 border rounded-xl my-32">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-4">
                    2. Paste Job Description
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl">
                    Paste your job description below and let our AI analyze the key requirements, 
                    skills, and qualifications needed for the role.
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Text Input Section */}
                <div className="w-full lg:w-2/3">
                    <div className="relative">
                        <textarea
                            value={jobDescription}
                            onChange={handleTextChange}
                            placeholder="Paste job description here..."
                            className="w-full min-h-[400px] p-6 rounded-xl border-2 border-blue-200 
                                focus:border-cyan-400 outline-none transition-all duration-300
                                bg-gradient-to-b from-blue-50/50 to-transparent
                                text-gray-700 text-lg resize-none
                                focus:ring-4 focus:ring-blue-100"
                        />
                        <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                            {jobDescription.length} characters
                        </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="mt-4 flex gap-4">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 
                            text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 
                            transition-all duration-300 shadow-lg hover:shadow-xl
                            font-medium">
                            Submit Description
                        </button>
                        <button 
                            onClick={() => setJobDescription('')}
                            className="px-6 py-3 border-2 border-blue-200 text-blue-600
                                rounded-lg hover:bg-blue-50 transition-all duration-300
                                font-medium">
                            Clear
                        </button>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="hidden lg:block lg:w-1/3 sticky top-8">
                    <div className="relative h-[500px] w-full rounded-xl overflow-hidden
                        shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                        <img 
                            src="/images/jobdescription.png" 
                            alt="Job Description Analysis" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {['AI-Powered Analysis', 'Skill Extraction', 'Requirement Summary'].map((feature, index) => (
                    <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50
                        border border-blue-100 hover:shadow-lg transition-all duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature}</h3>
                        <p className="text-gray-600">
                            Advanced processing to help you understand job requirements better.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};


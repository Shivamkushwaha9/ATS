import Footer from '@/components/landingpage/Footer'
import React from 'react'
import {
    InterviewCard,
    InterviewResumeUploader,
    JobDescriptionInput,
    TimelineDemo
} from '@/components/interview/Interviewcomp'
import { GithubRepoSelector } from '@/components/interview/Github'

const Interview = () => {
    return (
        <div className='mt-[84px] flex flex-col items-center justify-center overflow-hidden'>
            <InterviewCard />
            {/* <p>hello</p> */}
            <TimelineDemo />

            {/* The three interview page components: */}
            <InterviewResumeUploader />
            <JobDescriptionInput/>
            <GithubRepoSelector />

            <Footer />
        </div>
    )
}

export default Interview
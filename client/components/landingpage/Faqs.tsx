'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Faqs = () => {
    const data = {
        questions: ["What the heck is this?", "Who are you?", "How did you do it?","Where are my funds stored when using your platform?", "Where are my funds stored when using your platform?"],
        answers: [
            "This is one of my coolest projects. Check it out and give me feedback kindly.",
            "I'm a dreamer, who dreams of PRETTY BIG THINGS.",
            "Well I used pretty much gen ai and computer vision models and many more thingss here and there!!",
            "Minus We prioritize the security and safety of your funds. As a non-custodial platform, we do not directly handle or store your funds. Your funds remain in your brokerage account or exchange wallet, ensuring that you maintain full control and ownership over your assets.",
            "Where are my funds stored when using your platform?"
        ]
    };

    const [openedIndex, setOpenedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='flex flex-col bg-gradient-to-b from-[#05356A] to-[#1b1f32] items-center justify-center'>
            <h1 className='text-center text-4xl lg:text-6xl my-10 font-bold'>
                Frequently Asked Questions
            </h1>
            {data.questions.map((q, idx) => (
                <div
                    key={idx}
                    onClick={() => handleClick(idx)}
                    className='border my-6 w-[60vw] p-5 rounded-xl cursor-pointer border-gray-500 bg-[#0f101a] shadow-2xl border-transparent hover:shadow-[0_0_15px_5px_rgba(83,64,255,0.6)]'
                >
                    <div className='flex justify-between items-center px-7'>
                        <h1 className='text-xl font-semibold'>{q}</h1>
                        {openedIndex === idx ? (
                            <FaMinus className='text-gray-400' />
                        ) : (
                            <FaPlus className='text-gray-400' />
                        )}
                    </div>
                    {openedIndex === idx && (
                        <p className='mt-4 px-5 text-gray-300'>{data.answers[idx]}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faqs;
import React from 'react'

const Faqs = () => {

    const data = {
        questions: ["What the heck is this?", "Who are you?", "How did you do it?"],
        answers: ["This is one of my coolest project, Check It out and give me feedbacks kindly.", "I'm a dreamer, who dreams of PRETTY BIG THINGS.", "I used Chat gpt, Fuck Everything, Fuck you"]
    }

    return (
        <div className='flex flex-col bg-[#090909] items-center justify-center'>
            <div className='bg-[#080A16] border border-red-500'>
                {
                    data.questions.map((q, idx) => (
                        <div className='border'>
                            <h1>{q}</h1>
                            <p>{data.answers[idx]}</p>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Faqs
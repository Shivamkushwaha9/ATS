import { FaChevronRight } from 'react-icons/fa'

const Intro = () => {
    return (
        <div className="relative w-full h-full">
            <img
                src="/images/download.png"
                alt="Background"
                className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex flex-col lg:space-y-10 space-y-6 items-center justify-center bg-opacity-50">
                <h1 className="text-white text-5xl lg:text-7xl font-bold text-center w-[80vw]">
                    Overcoming the limitations of traditional ATS softwares.
                </h1>
                <p className=" text-center w-[80vw] lg:w-[60vw] lg:text-xl font-semibold">Ecosystem of interconnected tooling and infra api systems that are fast, secure and scalable across many Jobs.</p>
                <a className="flex flex-row items-center justify-center gap-3 bg-[#39D353] p-2 rounded-md mt-5 text-white transition-all duration-300 ease-in-out transform hover:scale-110 shadow-md border-transparent hover:border-[#39D353] hover:shadow-[0_0_15px_5px_rgba(83,64,255,0.6)]" href='#features'>
                    <p>Get started </p>
                    <FaChevronRight />
                </a>
            </div>
        </div>
    )
}

export default Intro
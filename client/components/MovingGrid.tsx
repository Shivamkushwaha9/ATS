'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const MovingGrid = () => {
    const data = {
        icons: ["Interview.svg", "Interview.svg", "Interview.svg", "Interview.svg", "Interview.svg", "Interview.svg", "Interview.svg", "Interview.svg", "Interview.svg"],
        items: ["Frontend", "Backend", "Data Science", "Machine Learning", "Deep Learning", "Software Engineering", "Generative AI", "Frontend", "Backend"]
    }
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const animationTimer = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setIsAnimating(true);
            }, 100);
        }, 10000);

        return () => clearInterval(animationTimer);
    }, []);

    return (
        <div className="w-full overflow-hidden py-4 md:py-8 text-white bg-[#000]">
            <h1 className="lg:text-3xl text-2xl font-semibold flex items-center justify-center lg:pt-7 pt-2">Get interview ready across&nbsp;</h1>
            <p className="lg:text-3xl text-2xl font-semibold text-center bg-gradient-to-r from-[#91f3a6] to-[#f72af7] bg-clip-text text-transparent mb-5">various domains</p>
            <div
                className={`flex gap-2 md:gap-4 ${isAnimating
                    ? 'animate-moveLeftMobile md:animate-moveLeftDesktop transition-transform duration-[10000ms] ease-linear'
                    : 'transform-none'
                    }`}
            >
                {data.items.map((item, index) => (
                    <div
                        key={index}
                        className="flex min-w-[120px] sm:min-w-[140px] md:min-w-[200px] 
                                 h-[60px] sm:h-[70px] md:h-[100px] 
                                 items-center justify-center gap-1.5 sm:gap-2 md:gap-3
                                 rounded-lg text-white 
                                 text-sm sm:text-base md:text-2xl font-bold
                                 shadow-lg px-2 sm:px-3 md:px-4 hover:scale-110 cursor-default group p-6 backdrop-blur-md transition-all duration-300 active:scale-90"
                    >
                        <Image
                            src={`/${data.icons[index]}`}
                            alt={item}
                            width={20}
                            height={20}
                            className="h-10 w-10 space-x-6"
                        />
                        <p className="text-center">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovingGrid;
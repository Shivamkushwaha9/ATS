import React from "react";

const Features = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="features">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover lg:object-contain absolute inset-0 z-0 bg-black"
        src="/images/bg.png"
        alt="Background"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center py-10 lg:py-20 px-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-center pb-10 lg:pb-20 text-3xl lg:text-5xl font-bold text-white">
            Features Specifically built for You
          </h1>

          {/* Feature Boxes */}
          <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0">
            {/* Box 1: Compute */}
            <div className="flex flex-col  p-6 rounded-xl bg-[#0e0c17] hover:bg-[#51306E] hover:bg-opacity-40 bg-opacity-20 cursor-default group backdrop-blur-md active:scale-95 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md border-transparent hover:border-[#7870c0] hover:shadow-[0_0_15px_5px_rgba(83,64,255,0.6)]">
              <div className="flex flex-row gap-3 items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="compute.webp"
                  alt="Compute"
                />
                <h1 className="text-3xl font-semibold text-white">Compute</h1>
              </div>
              <div>
                <p className="pt-2 font-semibold text-gray-400 text-sm">
                  Invsto provides users high performance compute engines for
                  backtesting and trading execution. Power up with our built-in
                  shared compute layer or scale it up using private cloud
                  solutions such as AWS.
                </p>
              </div>
            </div>

            {/* Box 2: Research */}
            <div className="flex flex-col  p-6 rounded-xl bg-[#0e0c17] hover:bg-[#51306E] hover:bg-opacity-40 bg-opacity-20 cursor-default group backdrop-blur-md active:scale-95 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md border-transparent hover:border-[#7870c0] hover:shadow-[0_0_15px_5px_rgba(83,64,255,0.6)]">
              <div className="flex flex-row gap-3 items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="research.webp"
                  alt="Research"
                />
                <h1 className="text-3xl font-semibold text-white">Research</h1>
              </div>
              <div>
                <p className="pt-2 font-semibold text-gray-400 text-sm">
                  Invsto provides users high performance compute engines for
                  backtesting and trading execution. Power up with our built-in
                  shared compute layer or scale it up using private cloud
                  solutions such as AWS.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row of Feature Boxes */}
          <div className="flex flex-col lg:flex-row lg:space-x-8 mt-6 space-y-6 lg:space-y-0">
            {/* Box 3: Data */}
            <div className="flex flex-col  p-6 rounded-xl bg-[#0e0c17] hover:bg-[#51306E] hover:bg-opacity-40 bg-opacity-20 cursor-default group backdrop-blur-md active:scale-95 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md border-transparent hover:border-[#7870c0] hover:shadow-[0_0_15px_5px_rgba(83,64,255,0.6)]">
              <div className="flex flex-row gap-3 items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="data.webp"
                  alt="Data"
                />
                <h1 className="text-3xl font-semibold text-white">Data</h1>
              </div>
              <div>
                <p className="pt-2 font-semibold text-gray-400 text-sm">
                  Invsto provides users high performance compute engines for
                  backtesting and trading execution. Power up with our built-in
                  shared compute layer or scale it up using private cloud
                  solutions such as AWS.
                </p>
              </div>
            </div>

            {/* Box 4: Infra */}
            <div className="flex flex-col  p-6 rounded-xl bg-[#0e0c17] hover:bg-[#51306E] hover:bg-opacity-40 bg-opacity-20 cursor-default group backdrop-blur-md active:scale-95 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md border-transparent hover:border-[#7870c0] hover:shadow-[0_0_15px_5px_rgba(83,64,255,0.6)]">
              <div className="flex flex-row gap-3 items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="infra.webp"
                  alt="Infra"
                />
                <h1 className="text-3xl font-semibold text-white">Infra</h1>
              </div>
              <div>
                <p className="pt-2 font-semibold text-gray-400 text-sm">
                  Invsto provides users high performance compute engines for
                  backtesting and trading execution. Power up with our built-in
                  shared compute layer or scale it up using private cloud
                  solutions such as AWS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

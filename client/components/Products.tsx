import React from 'react'

const Products = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b to-[#000000] from-[#000000] via-[#05356B] flex flex-col items-center justify-center text-white p-8">
            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center bg-gradient-to-">
                Welcome to the New Component
            </h1>
            {/* Subheading */}
            <p className="text-lg lg:text-xl text-gray-300 mb-12 text-center max-w-2xl">
                This is a simple component with a beautiful gradient background. You can add more content here, like cards, buttons, or images.
            </p>
            {/* Call-to-Action Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
            </button>
        </div>
    )
}

export default Products
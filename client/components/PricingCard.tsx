const PricingCard = () => {
    return (
        <div className='relative w-full h-full'>
            <img className='w-full h-full object-cover' src='background.png' />
            <div className='absolute inset-0'>
                <h1 className='text-center text-3xl lg:text-4xl font-bold pt-10'>
                    Simple and Transparent Pricing for Everyone
                </h1>
                {/* Containing three cards */}
                <div className='flex flex-col lg:flex-row w-full items-center justify-center lg:justify-evenly space-y-10'>
                    <div className='h-auto w-full text-center'>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </div>
                    <div className='h-auto w-full text-center'>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </div>
                    <div className='h-auto w-full text-center'>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard

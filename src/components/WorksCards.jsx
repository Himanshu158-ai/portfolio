import React from 'react'

const WorksCards = () => {
    return (
        <div className={`bg-[#080807] flex flex-col gap-10 px-5 md:px-10 w-screen font-ppwatch text-[#D1D1C7] pb-20`}>
            <hr className='border-0 border-t border-[#D1D1C7] h-px opacity-40' />

            <div className='flex flex-col lg:flex-row gap-10 lg:gap-80'>
                <div>
                    <h1 className='text-3xl md:text-5xl font-bold tracking-tight'>(01)</h1>
                </div>

                <div className='flex flex-col gap-14'>
                    <h1 className='text-3xl md:text-5xl font-bold tracking-tighter'>
                        Full-Stack Development
                    </h1>

                    <div className='flex flex-col gap-8 mt-3 text-md font-light'>
                        <p className='text-md font-light tracking-tight md:w-[60%]'>
                            From frontend interactions to backend APIs, I build complete
                            web solutions. I work with modern stacks to deliver apps that
                            are scalable, maintainable, and ready for real-world users.
                        </p>

                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-8'>
                                <span className='text-md font-light tracking-tight'>01</span>
                                <h2 className='text-lg md:text-xl font-semibold tracking-wide'>
                                    React, Node.js, Express.js
                                </h2>
                            </div>

                            <hr className='border-0 border-t border-[#D1D1C7] h-px opacity-40' />

                            <div className='flex items-center gap-8'>
                                <span className='text-md font-light tracking-tight'>02</span>
                                <h2 className='text-lg md:text-xl font-semibold tracking-wide'>
                                    REST APIs, Firebase, Docker
                                </h2>
                            </div>

                            <hr className='border-0 border-t border-[#D1D1C7] h-px opacity-40' />

                            <div className='flex items-center gap-8'>
                                <span className='text-md font-light tracking-tight'>03</span>
                                <h2 className='text-lg md:text-xl font-semibold tracking-wide'>
                                    Git, GitHub, Postman
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorksCards

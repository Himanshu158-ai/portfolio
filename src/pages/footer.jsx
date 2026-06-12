import React from 'react'

const footer = () => {
  return (
    <div className='h-[80vh] w-full font-ppwatch px-6 md:px-12 pt-60 relative z-10'>
      <div className='grid grid-cols-2 gap-12 md:gap-24'>

        {/* Menu */}
        <div>
          <h1 className='text-lg font-medium mb-4 text-[#393632]'>Menu</h1>

          <hr className='border-black/20 mb-6' />

          <div className='flex flex-col gap-3 text-[#6B645C]'>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Home
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Home
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                About
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                About
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Projects
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Projects
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Contact
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Contact
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Resume
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Resume
              </span>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h1 className='text-lg font-medium mb-4 text-[#393632]'>Socials</h1>

          <hr className='border-black/20 mb-6' />

          <div className='flex flex-col gap-3 text-[#6B645C]'>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Github
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Github
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Linkedin
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Linkedin
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Instagram
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                Instagram
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default footer
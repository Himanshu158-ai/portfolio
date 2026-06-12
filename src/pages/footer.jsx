import React from 'react'

const footer = () => {
  return (
    <div className='h-[80vh] w-full font-ppwatch px-6 md:px-12 pt-60 relative z-10'>
      <div className='grid grid-cols-2 gap-12 md:gap-24'>

        {/* Menu */}
        <div>
          <h1 className='text-lg md:text-xl font-medium mb-4 text-[#393632] tracking-wider'>Menu</h1>

          <hr className='border-black/20 mb-6' />

          <div className='flex flex-col gap-3 text-[#6B645C]'>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Home
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Home
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                About
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                About
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Projects
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Projects
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Contact
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Contact
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Resume
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Resume
              </span>
            </a>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h1 className='text-lg md:text-xl font-medium mb-4 text-[#393632] tracking-wider'>Socials</h1>

          <hr className='border-black/20 mb-6' />

          <div className='flex flex-col gap-3 text-[#6B645C]'>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Github
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Github
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Linkedin
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Linkedin
              </span>
            </a>
            <a
              href="#"
              className="group relative overflow-hidden h-[1.4em] inline-block font-light w-fit"
            >
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
                Instagram
              </span>

              <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0  text-[#6B645C] text-md md:text-lg tracking-wide font-ppwatch font-medium">
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
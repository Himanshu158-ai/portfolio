import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { yPercent: 5 },
      {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          end: 'bottom 90%',
          scrub: true,
          // markers:true
        },
      }
    )
  }, [])

  return (
    <div className='relative z-9' id='contact'>
      <div
        ref={cardRef}
        className='bg-[linear-gradient(to_bottom,#151513_0%,#121210_35%,#1A1815_65%,#2B2823_100%)] md:mx-20 mx-4 min-h-screen flex flex-col items-center justify-center relative -top-30 md:-top-25 rounded-[5px]'
      >
        <div className='md:max-w-[60%] max-w-[90%] text-center py-5  uppercase flex items-center justify-center'>
          <h1 className='text-2xl md:text-6xl font-bold font-ppwatch text-[#E8E8E3]'>let's make it together</h1>
        </div>
        <section className="w-full md:max-w-[60%]  px-4 md:px-8 py-10">
          <div className="max-w-5xl mx-auto rounded-[30px] border border-[#3d3d3d] bg-transparent px-6 md:px-14 py-12">

            <h2 className="text-center text-[#E8E8E3] text-2xl md:text-3xl font-medium mb-12">
              Have a project in mind?
            </h2>

            <form className="flex flex-col gap-8">

              <input
                type="text"
                placeholder="Your name"
                className="
w-full
md:h-16 h-12
rounded-xl
border border-[#2f2f2f]
bg-gradient-to-b
from-[#1b1b1b]
to-[#131313]
px-6
text-md md:text-xl
text-[#E8E8E3]
placeholder:text-[#6f6f6f]
outline-none
transition-all duration-500
shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
focus:border-[#4a4a4a]
focus:-translate-y-[2px]
focus:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
"
              />

              <input
                type="email"
                placeholder="Your email address"
                className="
w-full
md:h-16 h-12
rounded-xl
border border-[#2f2f2f]
bg-gradient-to-b
from-[#1b1b1b]
to-[#131313]
px-6
text-md md:text-xl
text-[#E8E8E3]
placeholder:text-[#6f6f6f]
outline-none
transition-all duration-500
shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
focus:border-[#4a4a4a]
focus:-translate-y-[2px]
focus:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
"
              />

              <textarea
                placeholder="Tell me about your business or project"
                className="
w-full
md:h-30 h-30
rounded-xl
border border-[#2f2f2f]
bg-gradient-to-b
from-[#1b1b1b]
to-[#131313]
px-6
py-6
text-lg md:text-xl
text-[#E8E8E3]
placeholder:text-[#6f6f6f]
outline-none
transition-all duration-500
shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
focus:border-[#4a4a4a]
focus:-translate-y-[2px]
focus:shadow-[0_10px_30px_rgba(0,0,0,0.3)]
"
              />

              <button
                type="submit"
                className="h-15 rounded-[1rem] bg-[#E8E8E3] text-black text-xl font-bold transition-all duration-300 hover:bg-white"
              >
                Get a quote
              </button>

            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
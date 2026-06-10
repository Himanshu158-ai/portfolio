import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".letter")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
      },
    })

    tl.from(letters, {
      y: 120,
      opacity: 0,
      stagger: 0.025,
      duration: 1.1,
      ease: "power4.out",
    })

    tl.from(
      contentRef.current,
      {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.6"
    )

    return () => {
      tl.kill()
    }
  }, [])

  const heading = "SELECTED WORKS /";

  return (
    <div
      ref={sectionRef}
      className="w-screen bg-[#080807] text-[#D1D1C7] font-ppwatch"
    >
      <div className="px-5 md:px-[4rem] py-10 md:py-20 flex flex-col gap-16 md:gap-20">

        <h1
          ref={headingRef}
          className='text-[2.8rem] md:text-6xl tracking-tighter font-semibold flex flex-wrap'
        >
          {"SELECTED WORKS /".split("").map((char, index) => (
            <span key={index} className="overflow-hidden">
              <span className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </h1>

        <div
          ref={contentRef}
          className='flex justify-between items-start flex-col md:flex-row gap-4 md:gap-15 w-[90%] md:w-[55%] md:ml-[45%]'
        >
          <h1 className='text-lg font-light tracking-wide'>
            (PROJECTS)
          </h1>

          <p className='text-sm font-light tracking-wide'>
            From authentication systems to full-scale web applications, these projects reflect my passion for building practical, production-ready solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
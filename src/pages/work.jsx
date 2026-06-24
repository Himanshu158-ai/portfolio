import React, { useEffect, useRef } from 'react'
import WorksCards from '../components/WorksCards'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import ScrollStack, { ScrollStackItem } from '../components/ScrollStack'

gsap.registerPlugin(ScrollTrigger)

const cardsData = [
  {
    num: "(01)",
    title: "Full-Stack Development",
    desc: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
    skills: ["React, Node.js, Express.js", "REST APIs, Database, Docker", "Git, GitHub, Postman"]
  },
  {
    num: "(02)",
    title: "UI/UX Design",
    desc: "Crafting modern, clean interfaces with smooth animations and intuitive user experiences that leave a lasting impression.",
    skills: ["TailwindCSS, HTML, JavaScript", "GSAP, CSS", "Responsive Design"]
  },
  {
    num: "(03)",
    title: "AI Integration",
    desc: "Building intelligent applications powered by LLMs and multi-agent pipelines that solve real-world problems with speed and accuracy.",
    skills: ["LangChain, LangGraph", "OpenAI, Gemini APIs", "RAG, Multi-Agent"]
  }
]

const work = () => {

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

  return (
    <div
      ref={sectionRef}
      className="w-screen bg-[#080807] text-[#D1D1C7] rounded-t-[2rem] font-ppwatch relative z-10"
      id='capabilities'
    >
      <div className="px-5 md:px-[4rem] py-10 md:py-20 flex flex-col gap-16 md:gap-20">

        <h1
          ref={headingRef}
          className='text-[2.3rem] md:text-6xl tracking-tighter font-semibold flex flex-wrap'
        >
          {"WHAT I DO /".split("").map((char, index) => (
            <span key={index} className="overflow-hidden">
              <span className="letter inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </h1>

        <div
          ref={contentRef}
          className='flex justify-between items-start flex-col md:flex-row gap-5 md:gap-15 w-full md:w-[55%] md:ml-[45%]'

        >
          <h1 className='text-[1rem] md:text-[1.2rem] font-medium tracking-wide'>
            (Capabilities)
          </h1>

          <p className='text-[0.9rem] md:text-[1rem] font-light tracking-tight'>
            MERN Stack Developer crafting scalable web applications, intelligent
            AI-powered solutions, and interactive user experiences. Focused on
            building clean, performant, and production-ready products that solve
            real-world problems.
          </p>
        </div>
      </div>

      <div className="relative h-[300vh] md:h-[400vh]">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="sticky h-[90vh]"
            style={{
              top: `${(i + 1) * 100}px`,
              zIndex: 10 + i,
            }}
          >
            <WorksCards data={card} idx={i} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default work
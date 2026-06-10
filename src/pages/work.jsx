

import React from 'react'
import WorksCards from '../components/WorksCards'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    title: "AI Integration",
    desc: "Building intelligent applications powered by LLMs and multi-agent pipelines that solve real-world problems with speed and accuracy.",
    skills: ["LangChain, LangGraph", "OpenAI, Gemini APIs", "Vector DBs, Multi-Agent"]
  },
  {
    num: "(03)",
    title: "UI/UX Design",
    desc: "Crafting modern, clean interfaces with smooth animations and intuitive user experiences that leave a lasting impression.",
    skills: ["TailwindCSS, Figma", "GSAP, CSS", "Responsive Design"]
  }
]

const work = () => {

  return (
    <div className='w-screen bg-[#080807] rounded-t-[1.6rem] text-[#D1D1C7] font-ppwatch'>
      <div className="px-5 md:px-[4rem] py-10 md:py-20 flex flex-col gap-16 md:gap-20">
        <h1 className='text-[2.5rem] md:text-8xl tracking-tighter font-semibold'>WHAT I DO /</h1>
        <div className='flex justify-between items-start flex-col md:flex-row gap-4 md:gap-15 w-[90%] md:w-[55%] md:ml-[45%]'>
          <h1 className='text-lg font-light tracking-wide'>(SERVICES)</h1>
          <p className='text-sm font-light tracking-wide'>
            MERN Stack Developer focused on building scalable web applications, AI-powered solutions, and interactive user experiences. I enjoy turning complex ideas into clean, efficient, and production-ready products.
          </p>
        </div>
      </div>

      <div className="relative h-[400vh]">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="sticky h-screen"
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
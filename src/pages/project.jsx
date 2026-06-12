import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectCards from "../components/ProjectCards";


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Aura",
    subtitle: "Your Multi-Agent Resume Builder",
    D: "https://i.pinimg.com/736x/b2/7a/45/b27a45abfc28992c9c004793231c2c89.jpg",
    link: "#"
  },
  {
    title: "NexHire",
    subtitle: "Where Talent Meets Opportunity",
    D: "https://i.pinimg.com/1200x/f3/fe/4e/f3fe4e50c9299ae4e16328a935d80078.jpg",
    link: "#"
  },
  {
    title: "CineVerse",
    subtitle: "Explore Stories Beyond Screens",
    D: "https://i.pinimg.com/1200x/ec/9c/13/ec9c13b5b06e1d8bb82c2ebde5408694.jpg",
    link: "#"
  },
];

const Project = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const contentRef = useRef(null)
  const [active, setActive] = useState(1);
  const sections = useRef([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.id));
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div
      ref={sectionRef}
      className="w-screen bg-[#080807] text-[#D1D1C7] font-ppwatch relative z-10"
      id="works"
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
            From AI-powered tools to full-stack web applications, these projects showcase my ability to build scalable, user-focused, and production-ready digital products.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT */}
        <div className="hidden md:flex h-screen sticky top-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={active}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-9xl font-bold"
            >
              0{active}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* RIGHT */}
        <div className=" flex flex-col gap-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-id={index + 1}
              ref={(el) => (sections.current[index] = el)}
              className=" flex items-center justify-center text-6xl"
            >
              <ProjectCards data={project}/>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Project;
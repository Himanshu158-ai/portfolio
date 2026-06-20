

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCards = ({ data }) => {

  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const runDecode = () => {
      let iteration = 0;

      gsap.to({}, {
        duration: 1.5,
        onUpdate: () => {
          titleRef.current.innerText = data.title
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";

              if (index < iteration) {
                return data.title[index];
              }

              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          iteration += 0.15;
        },
        onComplete: () => {
          titleRef.current.innerText = data.title;
        }
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: titleRef.current,
      start: "top 97%",
      onEnter: runDecode,
      onEnterBack: runDecode,
    });

    return () => trigger.kill();
  }, [data.title]);

  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 2,
      ease: "expo.out",
    });
  };

  const onMouseEnter = (e) => {
    setHovered(true);

    gsap.set(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
    });

    gsap.fromTo(
      cursorRef.current,
      { scale: 0 },
      { scale: 1, duration: 0.3, ease: "back.out(1.7)" }
    );
  }

  const onMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 0,
      duration: 0.2,
      ease: "power2.in",
    });
    setHovered(false);
  }

  return (
    <div className='w-full px-4 rounded-lg bg-[#080807] text-[#D1D1C7] flex flex-col gap-4 md:gap-3'>
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <img
          className="w-full  object-contain rounded-lg cursor-pointer "
          src={data.D}
          alt=""
        />
      </a>


      <div className='flex justify-between w-full items-center md:flex-row flex-col mt-3 md:mt-0 items-start gap-2 pt-4'>
        <div className='flex flex-col gap-5 md:gap-3'>
          <p className='text-sm font-light tracking-wider text-[#D1D1C7]/70'>{data.subtitle}</p>
          <h2 ref={titleRef} className='text-[1.2rem] md:text-[1.5rem] font-semibold tracking-tight text-[#D1D1C7]'>{data.title}</h2>
        </div>
        <div className="flex gap-2 w-full md:w-auto justify-between">
          <button className='border border-[#D1D1C7]/40 px-4 py-2 rounded-full text-[0.7rem] md:text-[0.8rem] text-[#D1D1C7] '>DEVELOPMENT</button>
          <button className='border px-4 py-2 rounded-full text-[0.7rem] md:text-[0.8rem] bg-[#D1D1C7] text-black'>{data.year}</button>
        </div>
      </div>

      <div
        ref={cursorRef}
        className={`fixed left-0 top-0 z-[9999] pointer-events-none
  w-24 h-24 rounded-full bg-white mix-blend-difference
  flex items-center justify-center
  -translate-x-1/2 -translate-y-1/2
  ${hovered ? "opacity-100" : "opacity-0"}`}
      >
        <span className="text-black text-sm font-semibold mix-blend-normal">
          VIEW
        </span>
      </div>
    </div>
  )
}


export default ProjectCards
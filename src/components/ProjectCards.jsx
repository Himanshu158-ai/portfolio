

import React, { useRef, useState } from 'react';
import gsap from 'gsap';

const ProjectCards = ({ data }) => {

  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef(null);

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


      <p className='text-sm font-light tracking-wider text-[#D1D1C7]/70'>{data.subtitle}</p>
      <div className='flex justify-between w-full items-center md:flex-row flex-col mt-3 md:mt-0 items-start gap-2'>
        <h2 className='text-[2rem] md:text-[2.5] font-semibold tracking-tight text-[#D1D1C7]'>{data.title}</h2>
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
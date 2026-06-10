import React from 'react'
import Landing from './pages/landing'
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';


const app = () => {

  const curtainRef = useRef(null);

  useEffect(() => {
    gsap.to(curtainRef.current, {
      y: "-100%",
      duration: 1.8,
      ease: "power4.inOut",
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="curtainClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.85 Q0.5,1.05 0,0.85 Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        ref={curtainRef}
        className="fixed w-full h-[120vh] bg-black z-[9999]"
        style={{ clipPath: "url(#curtainClip)" }}
      />
      <Landing />
    </>

  )
}

export default app
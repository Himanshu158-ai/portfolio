
import Landing from './pages/landing'
import Work from './pages/work';
import Project from './pages/project';
import Skill from './pages/skill';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Time from './pages/time'
import { useRef } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import Lenis from 'lenis'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const app = () => {

  const curtainRef = useRef(null);

  useEffect(() => {
    gsap.to(curtainRef.current, {
      y: "-100%",
      duration: 1.8,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  // smooth scroll lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="curtainClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.88 Q0.5,0.68 0,0.88 Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        ref={curtainRef}
        className="fixed w-full h-[130vh] bg-black z-[9999]"
        style={{ clipPath: "url(#curtainClip)" }}
      />

      <Landing />
      <Work />
      <Project />
      <div>
        <div className="relative z-10">
          <Skill />
        </div>
        <Contact />
      </div>
      <Footer />
      <Time />
    </>

  )
}

export default app
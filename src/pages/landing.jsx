
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const landing = () => {
    const [availableDate, setAvailableDate] = useState("");
    const EMAIL_ADDRESS = import.meta.env.EMAIL_ADDRESS;

    const nameRef = useRef(null);
    const navRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);
    const imgRef = useRef(null);
    const dateRef = useRef(null);
    const arrowRef = useRef(null);
    const mainRef = useRef(null);
    const btmRef = useRef(null);

    const scrollToSection = (id, duration = 1) => {
        gsap.to(window, {
            duration,
            scrollTo: `#${id}`,
            ease: "none",
        });
    };


    useEffect(() => {
        const date = new Date();

        const month = date
            .toLocaleString("en-US", { month: "short" })
            .toUpperCase();

        const year = date
            .getFullYear()
            .toString()
            .slice(-2);

        setAvailableDate(`${month}'${year}`);
    }, []);

    useEffect(() => {
        const splitName = new SplitType(nameRef.current, {
            types: "chars",
        });

        gsap.from(splitName.chars, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
            delay: 1.3,
        });

        gsap.from(
            [
                navRef.current,
                descRef.current,
                btnRef.current,
                imgRef.current,
                dateRef.current,
                arrowRef.current,
            ],
            {
                y: 60,
                opacity: 0,
                duration: 1.4,
                ease: "power4.out",
                delay: 1.8,
                stagger: 0.14,
                onComplete: () => {

                    gsap.to(navRef.current, {
                        opacity: 0,
                        y: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: document.body,
                            start: "top top",
                            end: "+=100",
                            scrub: true,
                            // markers: true,
                        },
                    });

                    gsap.to(nameRef.current, {
                        opacity: 0,
                        y: 100,
                        scale: 0.9,
                        ease: "none",
                        scrollTrigger: {
                            trigger: document.body,
                            start: "top top",
                            end: "+=400",
                            scrub: true,
                        },
                    });

                    gsap.to(btmRef.current, {
                        opacity: 0,
                        y: 100,
                        scale: 0.9,
                        ease: "none",
                        scrollTrigger: {
                            trigger: document.body,
                            start: "top top",
                            end: "+=400",
                            scrub: true,
                        },
                    });

                },
            }
        );

        return () => {
            splitName.revert();
        };
    }, []);

    return (
        <div ref={mainRef} className='min-h-screen h-screen bg-[#E8E8E3] font-ppwatch sticky top-0 z-0'>
            <nav ref={navRef} className='relative h-15 flex justify-between items-start md:items-center px-3 md:px-10 pt-5 md:pt-2'>
                <div className="text-[#6B645C] text-sm md:text-[1rem] font-medium tracking-wide w-[11rem] md:w-[20rem]">
                    Full Stack Developer / MERN
                </div>

                {/* Desktop Menu */}
                <div className="flex space-x-4 md:flex-row flex-col">
                    <a href="#capabilities" className="group relative overflow-hidden h-6 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("capabilities");
                        }}
                    >
                        <span className="flex flex-col text-[#6B645C] md:text-md text-sm font-medium tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-6">
                            <span>Capabilities</span>
                            <span>Capabilities</span>
                        </span>
                    </a>

                    <a href="#works" className="group relative overflow-hidden h-6 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("works", 2);
                        }}
                    >
                        <span className="flex flex-col text-[#6B645C] md:text-md text-sm font-medium tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-6">
                            <span>Works</span>
                            <span>Works</span>
                        </span>
                    </a>

                    <a href="#about" className="group relative overflow-hidden h-6 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("about", 3);
                        }}
                    >
                        <span className="flex flex-col text-[#6B645C] md:text-md text-sm font-medium tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-6">
                            <span>About</span>
                            <span>About</span>
                        </span>
                    </a>

                    <a href="mailto:himanshu.mern@gmail.com?subject=We%27d%20Like%20to%20Hire%20You" className="group relative overflow-hidden h-6 cursor-pointer"
                    >
                        <span className="flex flex-col text-[#6B645C] md:text-md text-sm font-medium tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-6">
                            <span>HireMe</span>
                            <span>HireMe</span>
                        </span>
                    </a>
                </div>
            </nav>

            <div className="flex flex-col gap-5 md:gap-20 mt-20 sm:mt-20 md:mt-3 lg:mt-3 xl:mt-30 w-full md:px-0">
                <div className='flex flex-col justify-center items-start md:items-center mt-[8rem] md:mt-12 w-full pl-5 md:pl-0'>
                    <h3 ref={nameRef} className='text-[2rem] sm:text-[4rem] md:text-[6rem] font-bold text-[#393632] tracking-tight leading-[1.7rem] md:leading-[1] md:scale-y-180 scale-y-[1.8] mb-4 md:mb-0'>
                        HIMANSHU<br className='md:hidden' /> SINGH
                    </h3>
                </div>

                <div ref={btmRef} className='flex justify-between w-full gap-10 flex-col md:flex-row'>

                    <div className='flex flex-col justify-around items-start md:items-start px-5 md:px-10 gap-6 md:gap-0 text-center md:text-left md:w-[40%] w-full'>
                        <ArrowDownRight
                            ref={arrowRef}
                            className="text-[#6B645C] text-md font-medium tracking-wide hidden md:block"
                            size={40}
                        />

                        <p ref={descRef} className='w-[80%] md:w-6/5 text-sm md:text-[1.2rem] font-medium text-[#6B645C] tracking-wide text-start'>
                            Building modern web experiences where scalable engineering meets the power of Generative AI.
                        </p>

                        <button ref={btnRef} className="group relative overflow-hidden rounded-full bg-[#393632] px-5 py-3">

                            {/* Hover Background */}
                            <span className="absolute inset-0 bg-[#8C8C73] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>

                            {/* Content */}
                            <a className="relative z-10 flex items-center gap-2 text-white font-bold text-lg cursor-pointer"
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("contact", 4.6);
                                }}
                            >
                                Contact
                                <ArrowUpRight
                                    size={22}
                                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </a>

                        </button>
                    </div>

                    <div className=" flex items-end md:w-[60%] w-full justify-between px-5">
                        <div className='flex justify-center items-center'>
                            <img ref={imgRef}
                                src="https://i.pinimg.com/1200x/24/2d/27/242d274244a9418715f036fedea751d9.jpg"
                                className='h-[9.2rem] w-[6.9rem] md:h-[16rem] md:w-[12rem] object-cover rounded-md grayscale'
                                alt="image"
                            />
                        </div>

                        <div className='flex justify-center md:justify-end items-center md:items-end'>
                            <div ref={dateRef} className='flex flex-col items-center md:items-end md:px-10 md:text-center'>
                                <p className='text-[#6B645C] text-md font-medium tracking-tight'>
                                    Available For Hire
                                </p>

                                <h2 className='text-[#393632] text-3xl md:text-6xl md:font-medium font-bold tracking-tight scale-y-130 md:text-center'>
                                    {availableDate}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default landing



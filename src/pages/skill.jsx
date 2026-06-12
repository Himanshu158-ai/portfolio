import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

function scrambleText(spans, finalText, duration = 1.2) {
    const totalFrames = Math.round(duration * 60)
    const revealAt = (i) => Math.floor((i / finalText.length) * totalFrames * 0.7)
    let frame = 0

    const tick = () => {
        let display = ''
        for (let i = 0; i < finalText.length; i++) {
            if (finalText[i] === ' ') {
                display += ' '
            } else if (frame >= revealAt(i) + Math.random() * 10) {
                display += finalText[i]
            } else {
                display += CHARS[Math.floor(Math.random() * CHARS.length)]
            }
        }
        spans.forEach((s) => { if (s) s.textContent = display })
        frame++
        if (frame < totalFrames) requestAnimationFrame(tick)
        else spans.forEach((s) => { if (s) s.textContent = finalText })
    }

    requestAnimationFrame(tick)
}

const skillColumns = [
    {
        heading: 'Languages\n& Tools',
        items: [
            "JavaScript",
            "TypeScript",
            "Python",
            "C++",
            "Git",
            "GitHub",
            "Docker",
            "Postman",
            "MongoDB",
            "Vercel",
            "Render"
        ],
    },
    {
        heading: 'Frameworks\n& Libraries',
        items: [
            'React',
            'Node.js',
            'Express.js',
            'Tailwind CSS',
            'GSAP', ,
            'GenAI',
            'LangGraph',
            'LangChain'
        ]
    },
    {
        heading: 'Core CS\nConcepts',
        items: ['DSA', 'DBMS', 'OOP', 'OS', 'CN'],
    },
]

const Skill = () => {
    const sectionRef = useRef(null)
    const itemRefs = useRef([]) // each entry: { li, span1, span2 }
    const titleRef = useRef(null)

    useEffect(() => {
        const split = new SplitType(titleRef.current, {
            types: 'chars',
        })

        gsap.from(split.chars, {
            y: 100,
            opacity: 0,
            stagger: 0.03,
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        })

        return () => split.revert()
    }, [])

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { width: '100%' },
            {
                width: '95%',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=500',
                    scrub: true,
                },
            }
        )

        itemRefs.current.forEach((refs) => {
            if (!refs) return
            const { span1, span2, original } = refs

            // Initial encoded state
            const encoded = Array.from({ length: original.length }, (_, i) =>
                original[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
            ).join('')
            span1.textContent = encoded
            span2.textContent = encoded

            ScrollTrigger.create({
                trigger: span1,
                start: 'top 90%',
                once: true,
                onEnter: () => scrambleText([span1, span2], original, 1.0 + Math.random() * 0.5),
            })
        })

        return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }, [])

    let refIndex = 0

    return (
        <div className="flex justify-center ">
            <div ref={sectionRef} className="w-screen ">
                <section className="w-full bg-[#080807] text-[#D1D1C7] flex flex-col-reverse md:flex-row px-6 md:px-10 py-40 font-ppwatch gap-30">
                    {/* Left Side */}
                    <div className="w-full md:w-[60%] flex items-center justify-center md:justify-start">
                        <div
                            ref={titleRef}
                            className="leading-[1.1] font-bold uppercase text-center md:text-left">
                            <h1 className="text-[2.3rem] md:text-[4rem] tracking-wide px-2">Code.</h1>
                            <h1 className="text-[2.3rem] md:text-[4rem] tracking-wide">Motion.</h1>
                            <h1 className="text-[2.3rem] md:text-[4rem] tracking-wide">Impact/</h1>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-6 md:gap-8 mt-8 md:mt-0">
                        <div className="flex justify-center">
                            <h2 className="text-[2.5rem] md:text-[4rem] font-medium">Skills</h2>
                        </div>

                        <div className="grid grid-cols-3 gap-x-4 gap-y-2 w-full">
                            {skillColumns.map((col, ci) => (
                                <div key={ci}>
                                    <h3 className="font-medium mb-3 whitespace-pre-line text-sm md:text-md md:font-semibold">
                                        {col.heading}
                                    </h3>
                                    <ul className="space-y-2 md:space-y-3 text-[#9f9f9f]">
                                        {col.items.map((skill) => {
                                            const idx = refIndex++
                                            return (
                                                <li
                                                    key={skill}
                                                    className="group relative overflow-hidden h-[1.5em] cursor-default text-[0.7rem] md:text-sm"
                                                    ref={(el) => {
                                                        if (el) {
                                                            itemRefs.current[idx] = {
                                                                original: skill,
                                                                span1: el.querySelector('[data-s="1"]'),
                                                                span2: el.querySelector('[data-s="2"]'),
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <span
                                                        data-s="1"
                                                        className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                    <span
                                                        data-s="2"
                                                        className="block absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="pt-20 w-full bg-[#080807] text-[#D1D1C7] px-4 md:px-8 py-12 font-ppwatch rounded-b-[2rem] z-20 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 h-full">

                        {/* Left Image */}
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="https://i.pinimg.com/1200x/ec/9c/13/ec9c13b5b06e1d8bb82c2ebde5408694.jpg"
                                alt="about"
                                className="w-full max-w-[350px] h-[500px] object-cover rounded-md"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col">

                            {/* Heading */}
                            <h2 className="text-[1.2rem] md:text-[1.5rem] leading-[1.2] font-medium md:w-[600px] text-left md:text-left md:mt-10">
                                I'm a developer who enjoys transforming complex ideas into simple,
                                scalable, and production-ready digital products.
                            </h2>

                            {/* Bottom Section */}
                            <div className="mt-16 md:mt-24 grid md:grid-cols-[180px_1fr] gap-8 md:gap-8">

                                <div>
                                    <span className="text-lg font-light tracking-wide">
                                        (About Me)
                                    </span>
                                </div>

                                <div className="space-y-5 text-base md:text-[0.9rem] leading-[1.25] text-[#D1D1C7] min-w-0 max-w-[450px] md:pr-18 pr-10">
                                    <p className='text-sm font-light tracking-wide'>
                                        I build modern web applications and AI-powered experiences with a focus on performance, scalability, and clean design. Passionate about turning complex ideas into simple, useful, and production-ready products.
                                    </p>

                                    <p className='text-sm font-light tracking-wide'>
                                        Whether it’s a full-stack platform, an intelligent AI tool, or an interactive user experience, I enjoy creating software that delivers real value and feels effortless to use.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skill
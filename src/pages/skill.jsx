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
        heading: 'Frameworks\n& Librarie',
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
                width: '98%',
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: '50% top',
                    end: '+=550',
                    scrub: true,
                    // markers:true
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
        <div className="flex justify-center " id='about'>
            <div
                ref={sectionRef}
                className="w-screen ">
                <section className="w-full bg-[#080807] text-[#D1D1C7] flex flex-col-reverse md:flex-row md:px-10 py-40 font-ppwatch gap-30 md:gap-8">
                    {/* Left Side */}
                    <div className="w-full md:w-[50%] flex items-center justify-center md:justify-start">
                        <div
                            ref={titleRef}
                            className="leading-[1.1] font-bold uppercase text-center md:text-left">
                            <h1 className="text-[2.8rem] md:text-[4rem] lg:text-[5rem] tracking-wide px-2">Code.</h1>
                            <h1 className="text-[2.8rem] md:text-[4rem] lg:text-[5rem] tracking-wide">Motion.</h1>
                            <h1 className="text-[2.8rem] md:text-[4rem] lg:text-[5rem] tracking-wide">Impact/</h1>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-8 mt-6 md:mt-0">
                        <div className="flex justify-center">
                            <h2 className="text-[2.8rem] md:text-[4rem] tracking-wide">Skills</h2>
                        </div>

                        <div className="grid grid-cols-3 gap-x-8 gap-y-2 w-full px-6">
                            {skillColumns.map((col, ci) => (
                                <div key={ci}>
                                    <h3 className="font-light mb-3 text-[0.75rem] md:text-[1rem] md:font-semibold">
                                        {col.heading}
                                    </h3>
                                    <hr className='pt-4 opacity-30' />
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
                                                        className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-xs md:text-[0.9rem]"
                                                    >
                                                        {skill}
                                                    </span>
                                                    <span
                                                        data-s="2"
                                                        className="block absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-xs md:text-[0.9rem]"
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

                <section className="pt-20  bg-[#080807] text-[#D1D1C7] md:px-8 py-12 font-ppwatch rounded-b-[2rem] z-20 relative w-full">

                    <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 md:gap-0 h-full px-5">

                        {/* Left Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative group w-full max-w-[350px]">
                                <div className="absolute -inset-2 border border-[#6B645C]/30 rounded-sm translate-x-3 translate-y-3 -z-10"></div>

                                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-sm">
                                    <img
                                        src='https://i.pinimg.com/1200x/24/2d/27/242d274244a9418715f036fedea751d9.jpg'
                                        alt="about"
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-[#6B645C]/20 mix-blend-color transition-opacity duration-700 "></div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col w-full">

                            {/* Heading */}
                            <h2 className="text-[1rem] md:text-[1.5rem] leading-[1.2] font-medium md:w-[600px] text-left md:mt-10">
                                -I'm a developer who enjoys transforming complex ideas into simple,
                                scalable, and production-ready digital products.
                            </h2>

                            {/* Bottom Section */}
                            <div className="mt-16 md:mt-24 grid md:grid-cols-[180px_1fr] gap-8 md:gap-2 w-full">

                                <div>
                                    <span className="text-[1rem] md:text-[1.2rem] font-medium tracking-wide">
                                        (About Me)
                                    </span>
                                </div>

                                <div className="space-y-6 text-base md:text-[0.9rem] leading-[1.24] text-[#D1D1C7] md:max-w-[450px] w-full">
                                    <p className='text-[0.9rem] md:text-[1rem] font-light tracking-tight mr-6 min-w-full'>
                                        I build modern web applications and AI-powered experiences with a focus on performance, scalability, and clean design. Passionate about turning complex ideas into simple, useful, and production-ready products.
                                    </p>

                                    <p className='text-[0.9rem] md:text-[1rem] font-light tracking-tight mr-6 min-w-full'>
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

// src="https://i.pinimg.com/736x/fe/ce/d9/feced940ac84097e5f76881d376d2748.jpg"
// src='https://i.pinimg.com/736x/0a/5a/d0/0a5ad04ded73ddfa88bead239be71ce5.jpg'
// src='https://i.pinimg.com/736x/f4/71/55/f47155707c3d433ebdf05a8dc7fcdc23.jpg'
// src='https://i.pinimg.com/1200x/24/2d/27/242d274244a9418715f036fedea751d9.jpg'
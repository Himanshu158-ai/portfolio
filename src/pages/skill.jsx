// import React, { useRef, useEffect } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Skill = () => {
//     const sectionRef = useRef(null)

//     useEffect(() => {
//         gsap.fromTo(
//             sectionRef.current,
//             { width: "100%" },
//             {
//                 width: "97%",
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top top",
//                     end: "+=500",
//                     scrub: true,
//                 },
//             }
//         )
//     }, [])

//     return (
//         <div className="min-h-[200vh] bg-[#E8E8E3] flex justify-center">
//             <div
//                 ref={sectionRef}
//                 className="bg-[#080807] text-white rounded-b-[2rem] pt-30"
//             >
//                 <section className="h-screen w-full bg-[#080807] text-[#D1D1C7] flex px-10 py-12 font-ppwatch">
//                     {/* Left Side */}
//                     <div className="w-[50%] flex items-center">
//                         <div className="leading-[0.9] font-bold uppercase">
//                             <h1 className="text-[4rem] tracking-tighter">Developer</h1>
//                             <h1 className="text-[4rem] tracking-tighter">Designer</h1>
//                             <h1 className="text-[4rem] tracking-tighter">Creator/</h1>
//                         </div>
//                     </div>

//                     {/* Right Side */}
//                     <div className="w-[50%] flex flex-col justify-between items-center gap-10">
//                         <div className="flex justify-center">
//                             <h2 className="text-[4rem] font-medium">Skills</h2>
//                         </div>

//                         <div className="grid grid-cols-3 gap-2">
//                             {/* Column 1 */}
//                             <div>
//                                 <h3 className="font-medium mb-4">
//                                     Languages
//                                     <br />
//                                     & Tools
//                                 </h3>

//                                 <ul className="space-y-2 text-[#9f9f9f]">
//                                     <li>Python</li>
//                                     <li>SQL</li>
//                                     <li>C++</li>
//                                     <li>Java</li>
//                                     <li>TypeScript</li>
//                                     <li>JavaScript</li>
//                                     <li>Git</li>
//                                     <li>Postman</li>
//                                     <li>Docker</li>
//                                     <li>Firebase</li>
//                                 </ul>
//                             </div>

//                             {/* Column 2 */}
//                             <div>
//                                 <h3 className="font-medium mb-4">
//                                     Frameworks
//                                     <br />
//                                     & Libraries
//                                 </h3>

//                                 <ul className="space-y-2 text-[#9f9f9f]">
//                                     <li>React</li>
//                                     <li>Node.js</li>
//                                     <li>Express.js</li>
//                                     <li>Flask</li>
//                                     <li>Bootstrap</li>
//                                     <li>jQuery</li>
//                                     <li>TailwindCSS</li>
//                                     <li>Framer Motion</li>
//                                     <li>GSAP</li>
//                                 </ul>
//                             </div>

//                             {/* Column 3 */}
//                             <div>
//                                 <h3 className="font-medium mb-4">
//                                     Core CS
//                                     <br />
//                                     Concepts
//                                 </h3>

//                                 <ul className="space-y-2 text-[#9f9f9f]">
//                                     <li>DSA</li>
//                                     <li>DBMS</li>
//                                     <li>OOP</li>
//                                     <li>Operating Systems</li>
//                                     <li>System Design</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className='h-screen w-full bg-green-400'>

//                 </section>
//             </div>
//         </div>
//     )
// }

// export default Skill




import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
        items: ['Python', 'SQL', 'C++', 'Java', 'TypeScript', 'JavaScript', 'Git', 'Postman', 'Docker', 'Firebase'],
    },
    {
        heading: 'Frameworks\n& Libraries',
        items: ['React', 'Node.js', 'Express.js', 'Flask', 'Bootstrap', 'jQuery', 'TailwindCSS', 'Framer Motion', 'GSAP'],
    },
    {
        heading: 'Core CS\nConcepts',
        items: ['DSA', 'DBMS', 'OOP', 'Operating Systems', 'System Design'],
    },
]

const Skill = () => {
    const sectionRef = useRef(null)
    const itemRefs = useRef([]) // each entry: { li, span1, span2 }

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
        <div className=" bg-[#E8E8E3] flex justify-center ">
            <div ref={sectionRef} className="w-screen">
                <section className="w-full bg-[#080807] text-[#D1D1C7] flex flex-col-reverse md:flex-row px-6 md:px-10 py-12 font-ppwatch gap-30">
                    {/* Left Side */}
                    <div className="w-full md:w-[60%] flex items-center justify-center md:justify-start">
                        <div className="leading-[1] font-bold uppercase text-center md:text-left">
                            <h1 className="text-[2.5rem] md:text-[4rem] tracking-wide">Developer</h1>
                            <h1 className="text-[2.5rem] md:text-[4rem] tracking-wide">Designer</h1>
                            <h1 className="text-[2.5rem] md:text-[4rem] tracking-wide">Creator/</h1>
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
                                    <ul className="space-y-1 md:space-y-2 text-[#9f9f9f]">
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

                <section className="pt-20 w-full bg-[#080807] text-[#D1D1C7] px-4 md:px-8 py-12 font-ppwatch rounded-b-[2rem]">
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
                            <h2 className="text-[1.2rem] md:text-[1.5rem] leading-[1.2] font-medium md:w-[580px] text-left md:text-left md:mt-10">
                                I'm a software engineer driven by a passion for turning ideas into
                                clean, intuitive digital experiences.
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
                                        I’m a full-stack developer who builds fast, modern web
                                        applications using React, Next.js, Node.js, and Tailwind CSS.
                                        I enjoy turning ideas into products that are reliable,
                                        scalable, and genuinely enjoyable to use.
                                    </p>

                                    <p className='text-sm font-light tracking-wide'>
                                        My focus is creating smooth user experiences, writing clean
                                        code, and building projects that solve real problems. Whether
                                        it’s a portfolio, SaaS product, or business website, I care
                                        about the details that make software feel polished.
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
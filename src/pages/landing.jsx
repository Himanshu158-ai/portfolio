import img from "../assets/a.jpeg"
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const landing = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [availableDate, setAvailableDate] = useState("");

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

    return (
        <div className='min-h-screen bg-[#E8E8E3] font-ppwatch'>
            <nav className='relative h-15 flex justify-between items-center px-5 md:px-10 pt-6 md:pt-4'>
                <div className="text-[#6B645C] text-sm md:text-md font-medium tracking-wide w-[10rem] md:w-[20rem]">
                    Web Developer &amp; Designer
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="group relative overflow-hidden h-6">
                        <span className="flex flex-col text-[#6B645C] text-md font-medium tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-6">
                            <span>Services</span>
                            <span>Services</span>
                        </span>
                    </a>

                    <a href="#" className="group relative overflow-hidden h-6">
                        <span className="flex flex-col text-[#6B645C] text-md font-medium tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-6">
                            <span>Works</span>
                            <span>Works</span>
                        </span>
                    </a>

                    <a href="#" className="group relative overflow-hidden h-6">
                        <span className="flex flex-col text-[#6B645C] text-md font-medium tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-6">
                            <span>About</span>
                            <span>About</span>
                        </span>
                    </a>

                    <a href="#" className="group relative overflow-hidden h-6">
                        <span className="flex flex-col text-[#6B645C] text-md font-medium tracking-wide transition-transform duration-500 ease-out group-hover:-translate-y-6">
                            <span>Contact</span>
                            <span>Contact</span>
                        </span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-[#6B645C]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-20 left-5 right-5 bg-[#E8E8E3] border border-[#d3d3cd] rounded-xl p-5 flex flex-col gap-4 md:hidden shadow-sm">
                        <a href="#" className="text-[#6B645C] font-medium">Services</a>
                        <a href="#" className="text-[#6B645C] font-medium">Works</a>
                        <a href="#" className="text-[#6B645C] font-medium">About</a>
                        <a href="#" className="text-[#6B645C] font-medium">Contact</a>
                    </div>
                )}
            </nav>

            <div className='flex flex-col justify-center items-center px-4 mt-[12rem] md:mt-0'>
                <h3 className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold text-[#171717] tracking-tight text-center leading-[2.1rem] md:leading-[1]'>
                    HIMANSHU SINGH
                </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 pt-10 md:mt-12 md:h-[calc(100vh-15rem)]'>

                <div className='flex flex-col justify-around items-center md:items-start px-5 md:px-10 gap-6 md:gap-0 text-center md:text-left'>
                    <ArrowDownRight
                        className="text-[#6B645C] text-md font-medium tracking-wide hidden md:block"
                        size={40}
                    />

                    <p className='w-full md:w-6/5 text-sm md:text-lg font-medium text-[#6B645C] tracking-wide'>
                        Building modern web experiences where scalable engineering meets the power of Generative AI.
                    </p>

                    <button className="group relative overflow-hidden rounded-full bg-[#393632] px-8 py-3">

                        {/* Hover Background */}
                        <span className="absolute inset-0 bg-[#8C8C73] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>

                        {/* Content */}
                        <span className="relative z-10 flex items-center gap-2 text-white font-bold text-lg">
                            Contact
                            <ArrowUpRight
                                size={22}
                                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </span>

                    </button>
                </div>

                <div className='flex justify-center items-center'>
                    <img
                        src="https://i.pinimg.com/1200x/e7/f2/f1/e7f2f17de35ce63c6621c957a3d8c7e8.jpg"
                        className='h-[12rem] w-[8rem] md:h-[16rem] md:w-[11rem] object-cover rounded-lg'
                        alt="image"
                    />
                </div>

                <div className='flex justify-center md:justify-end items-center md:items-end'>
                    <div className='flex flex-col items-center md:items-end px-5 md:px-10'>
                        <p className='text-[#6B645C] text-md font-medium tracking-wide'>
                            Available For Hire
                        </p>

                        <h2 className='text-[#393632] text-4xl md:text-5xl font-bold tracking-tight'>
                            {availableDate}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default landing

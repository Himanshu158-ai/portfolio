import img from "../assets/a.jpeg"
import { ArrowDownRight, Menu, X } from "lucide-react";
import { useState } from "react";

const landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // <div className='h-screen bg-[#E8E8E3] font-ppwatch'>
        //     <nav className='h-15 flex justify-between items-center px-10 pt-10'>
        //         <div className="text-[#6B645C] text-md font-medium tracking-wide">
        //             Web Developer &amp; Designer
        //         </div>
        //         <div className="hidden md:flex space-x-4">
        //             <a className="text-[#6B645C] text-md font-medium tracking-wide hover:text-custom-black transition-colors duration-300" href="#">Services</a>
        //             <a className="text-[#6B645C] text-md font-medium tracking-wide hover:text-custom-black transition-colors duration-300" href="#">Works</a>
        //             <a className="text-[#6B645C] text-md font-medium tracking-wide hover:text-custom-black transition-colors duration-300" href="#">About</a>
        //             <a className="text-[#6B645C] text-md font-medium tracking-wide hover:text-custom-black transition-colors duration-300" href="#">Contact</a>
        //         </div>
        //     </nav>
        //     <div className='h-45 flex justify-center items-center'>
        //         <h3 className='text-[6rem] font-bold text-[#171717] tracking-tight'>HIMANSHU SINGH</h3>
        //     </div>
        //     <div className='h-[calc(100vh-15rem)] grid grid-cols-3'>
        //         <div className='flex flex-col justify-around items-start px-10'>
        //             <ArrowDownRight className="text-[#6B645C] text-md font-medium tracking-wide" size={40} />
        //             <p className='w-[3/4] text-lg font-medium text-[#6B645C] tracking-wide'>I build fast, modern websites that help businesses grow, available for freelance projects worldwide.</p>
        //             <button className='bg-[#393632] text-white px-8 py-2 text-lg font-bold rounded-full transition-all duration-300 hover:bg-[#8C8C73] hover:text-white'>Contact</button>
        //         </div>
        //         <div className='h-full flex justify-center items-center'>
        //             <img src={img} className='h-[19rem] w-[14rem] object-cover rounded-lg' alt="image" />
        //         </div>
        //         <div className='flex items-end justify-end pb-10'>
        //             <div className='flex flex-col items-end px-10 '>
        //                 <p className='text-[#6B645C] text-md font-medium tracking-wide'>Available For</p>
        //                 <h2 className='text-[#393632] text-6xl font-bold tracking-tight'>JUN'26</h2>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className='min-h-screen bg-[#E8E8E3] font-ppwatch'>
            <nav className='relative h-15 flex justify-between items-center px-5 md:px-10 pt-6 md:pt-10'>
                <div className="text-[#6B645C] text-sm md:text-md font-medium tracking-wide">
                    Web Developer &amp; Designer
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <a className="text-[#6B645C] text-md font-medium tracking-wide hover:text-custom-black transition-colors duration-300" href="#">Services</a>
                    <a className="text-[#6B645C] text-md font-medium tracking-wide hover:text-custom-black transition-colors duration-300" href="#">Works</a>
                    <a className="text-[#6B645C] text-md font-medium tracking-wide hover:text-custom-black transition-colors duration-300" href="#">About</a>
                    <a className="text-[#6B645C] text-md font-medium tracking-wide hover:text-custom-black transition-colors duration-300" href="#">Contact</a>
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

            <div className='flex justify-center items-center px-4 mt-8 md:mt-0'>
                <h3 className='text-[2.5rem] sm:text-[4rem] md:text-[6rem] font-bold text-[#171717] tracking-tight text-center'>
                    HIMANSHU SINGH
                </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 py-10 md:h-[calc(100vh-15rem)]'>

                <div className='flex flex-col justify-around items-center md:items-start px-5 md:px-10 gap-6 md:gap-0 text-center md:text-left'>
                    <ArrowDownRight
                        className="text-[#6B645C] text-md font-medium tracking-wide"
                        size={40}
                    />

                    <p className='w-full md:w-3/4 text-lg font-medium text-[#6B645C] tracking-wide'>
                        I build fast, modern websites that help businesses grow,
                        available for freelance projects worldwide.
                    </p>

                    <button className='bg-[#393632] text-white px-8 py-2 text-lg font-bold rounded-full transition-all duration-300 hover:bg-[#8C8C73] hover:text-white'>
                        Contact
                    </button>
                </div>

                <div className='flex justify-center items-center'>
                    <img
                        src={img}
                        className='h-[16rem] w-[12rem] md:h-[19rem] md:w-[14rem] object-cover rounded-lg'
                        alt="image"
                    />
                </div>

                <div className='flex justify-center md:justify-end items-center md:items-end'>
                    <div className='flex flex-col items-center md:items-end px-5 md:px-10'>
                        <p className='text-[#6B645C] text-md font-medium tracking-wide'>
                            Available For
                        </p>

                        <h2 className='text-[#393632] text-4xl md:text-6xl font-bold tracking-tight'>
                            JUN'26
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default landing

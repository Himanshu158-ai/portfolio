import React from 'react'

const MenuCard = ({isOpen,setIsOpen}) => {

    return (
        <div className=" bg-black/50 backdrop-blur-lg h-screen w-screen absolute top-0 left-0 right-0 bg-[#E8E8E3] border border-[#d3d3cd] p-5 flex flex-col gap-4 md:hidden shadow-sm">
            <a href="#capabilities" className="text-[#6B645C] font-medium cursor-pointer" onClick={(e) => {
                e.preventDefault();
                // scrollToSection("capabilities");
                setIsOpen(false);
            }}>Capabilities</a>
            <a href="#works" className="text-[#6B645C] font-medium cursor-pointer" onClick={(e) => {
                e.preventDefault();
                // scrollToSection("works", 3);
                setIsOpen(false);
            }}>Works</a>
            <a href="#about" className="text-[#6B645C] font-medium cursor-pointer" onClick={(e) => {
                e.preventDefault();
                // scrollToSection("about", 4);
                setIsOpen(false);
            }}>About</a>
            <a href="#contact" className="text-[#6B645C] font-medium cursor-pointer" onClick={(e) => {
                e.preventDefault();
                // scrollToSection("contact", 4.6);
                setIsOpen(false);
            }}>Contact</a>
        </div>
    )
}

export default MenuCard
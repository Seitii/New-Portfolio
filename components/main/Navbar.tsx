import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href=""
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Portfolio
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="#Experiences" className="cursor-pointer">
              Experiences
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
            <a href="https://github.com/Seitii" target="_blank" rel="noopener noreferrer">
            <FaGithub 
                size={30} 
                className="text-white transition outline-none focus:scale-110 hover:scale-110 active:scale-105" 
                style={{ width: '30px', height: '30px' }}/>
            </a>
            <a href="https://www.linkedin.com/in/hugo-odajima/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30}                 
              className="text-white transition outline-none focus:scale-110 hover:scale-110 active:scale-105" 
              style={{ width: '30px', height: '30px', color: 'white' }} />
            </a>    
        </div>
      </div>
    </div>
  );
};

export default Navbar;

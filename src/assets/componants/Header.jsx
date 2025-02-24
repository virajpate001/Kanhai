import React, { useEffect, useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import { FaLongArrowAltRight } from 'react-icons/fa'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg"



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div smooth={true} className="relative">
        <div
          id="desktop-menu"
          className={`fixed top-0 z-20 hidden w-full items-center justify-around text-white md:flex ${
            isScrolled ? "sticky" : ""
          }`}
        >
          <div>
            <img src={logo} className=" w-28" alt="logo" />
          </div>
          <div>
            <nav>
              <ul className="flex gap-6">
                <li className="cursor-pointer">
                  <ScrollLink to="about" smooth={true} duration={500}>
                    About us
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink to="facilities" smooth={true} duration={500}>
                    Facilities
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink to="rooms" smooth={true} duration={500}>
                    Rooms & Services
                  </ScrollLink>
                </li>
                
                <li className="cursor-pointer">
                  <ScrollLink to="gallery" smooth={true} duration={500}>
                    Gallery
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink to="contact" smooth={true} duration={500}>
                    Google Reviews
                  </ScrollLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <Link
              to="tel:+918983534184"
              smooth={true}
              duration={500}
              className="mt-2 inline-block cursor-pointer rounded-full bg-orange-400 px-4 py-2 text-base capitalize text-white"
            >
              Call Now
              <span className="ml-2">
                <FaLongArrowAltRight className="jello-horizontal text-2xl inline-block p-1 rounded-full bg-white text-orange-400" />
              </span>
            </Link>
          </div>
        </div>

        <div id="mobile-menu" className="md:hidden">
          <div
            className={`w-full  top-0 z-20 flex justify-between items-center bg-slate-900 
						}`}
          >
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <div
                onClick={toggleMenu}
                className="text-white focus:outline-none mr-16"
              >
                {/* <IoIosMenu className="text-white text-3xl" />
								<IoMdClose className="text-white text-3xl" /> */}

                {isOpen ? (
                  <IoMdClose className="text-white text-3xl" />
                ) : (
                  <IoIosMenu className="text-white text-3xl" />
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "max-h-screen" : "max-h-0"
            } overflow-hidden transition-max-height duration-700 ease-in-out	`}
          >
            <nav>
              <ul>
                <li className="cursor-pointer">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 border-b"
                  >
                    About us
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    to="facilities"
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 border-b"
                  >
                    Facilities
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    to="rooms"
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 border-b"
                  >
                    Rooms & Services
                  </ScrollLink>
                </li>
              
                <li className="cursor-pointer">
                  <ScrollLink
                    to="gallery"
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 border-b"
                  >
                    Gallery
                  </ScrollLink>
                </li>
                <li className="cursor-pointer">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 border-b"
                  >
                    Contact us
                  </ScrollLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

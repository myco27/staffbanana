"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CiBellOn } from "react-icons/ci";
import { HiOutlineLogout, HiUser } from 'react-icons/hi';


const Navbar = () => {

  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const serviceMenuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      serviceMenuRef.current &&
      !serviceMenuRef.current.contains(event.target)
    ) {
      setIsServiceMenuOpen(false);
    }
  };


  return (
    <nav className="bg-white shadow-md">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                

                {/* Right side content (notifications, user menu, and user profile) */}
                <div className="ml-auto flex items-center space-x-2">
                    <div className="flex items-center justify-center bg-black rounded-full w-9 h-9">
                        <CiBellOn className="text-white cursor-pointer" />
                    </div>

                    {/* User Profile */}
                    <div className="relative" ref={serviceMenuRef}>
                      <a
                        onClick={toggleServiceMenu}
                        className="text-base font-semibold px-2 cursor-pointer hover:font-bold text-black flex items-center"
                      >
                        <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                            <Image
                              src="/image/profile/luffy.png"
                              width={40}
                              height={40}
                              className="rounded-full mr-2"
                              alt="Profile Image"
                            />
                        </div>

                        Christoper Sarmiento
                        <svg
                          className={`ml-1 h-5 w-5 transition-transform duration-300 ${
                            isServiceMenuOpen ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </a>
                      {isServiceMenuOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-200 rounded-md shadow-lg py-1 z-20">
                          <a
                            href="#"
                            className="flex px-4 py-2 text-sm text-white font-semibold hover:bg-gray-300 hover:text-black"
                          >
                          <HiUser className="mr-2" />
                            Profile
                          </a>
                         
                          <a
                            href="#"
                            className="flex px-4 py-2 text-sm text-white font-semibold hover:bg-gray-300 hover:text-black"
                            >
                            <HiOutlineLogout className="mr-2" />
                            Log out
                          </a>
                        </div>
                      )}
                    </div>
                </div>
            </div>
        </div>
    </nav>



  );
};

export default Navbar;

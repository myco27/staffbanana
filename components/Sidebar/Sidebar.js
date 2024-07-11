"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardDoubleArrowLeft, MdDashboard, MdOutlineSubscriptions, MdExpandMore, MdExpandLess } from "react-icons/md";
import { FaSearch, FaUserFriends, FaGlobe, FaRegQuestionCircle } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiTeamLine } from "react-icons/ri";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setOpen(!open);
        if (open) {
            setDropdownOpen(false);
        }
    };

    const handleDropdownClick = () => {
        if (!open) {
            setOpen(true);
        }
        setDropdownOpen(!dropdownOpen);
    };

    const Menu = [
        {
            icon: <MdDashboard size={20} />,
            href: "/dashboard",
            label: "Dashboard",
            roles: [""],
            isActive: pathname === `/dashboard`,
        },
        
        
        {
            icon: <FaRegQuestionCircle size={20} />,
            href: "#",
            label: "View",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/view") : false,
            submenu: [
                { href: "/view/timeTracker", label: "Time Tracker 1" },
                { href: "/view/option2", label: "Option 2" },
                { href: "/view/option3", label: "Option 3" },
            ],
        },
        {
            icon: <GrUserAdmin size={20} />,
            href: "/admin",
            label: "Admin Management",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/admin") : false,
        },
        {
            icon: <FaUserFriends size={20} />,
            href: "/client",
            label: "Client Management",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/client") : false,
        },
        {
            icon: <FaGlobe size={20} />,
            href: "/site",
            label: "Site Management",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/site") : false,
        },
        {
            icon: <MdOutlineSubscriptions size={20} />,
            href: "/subscription",
            label: "Subscription",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/subscription") : false,
        },
        {
            icon: <TfiAnnouncement size={20} />,
            href: "/announcement",
            label: "Announcement",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/announcement") : false,
        },
        {
            icon: <RiTeamLine size={20} />,
            href: "/developer",
            label: "Developer",
            roles: [""],
            isActive: pathname ? pathname.startsWith("/developer") : false,
        },
        
    ];


    return (
        <main className="flex">
    <div className={`bg-gray-800 min-h-screen fixed top-0 transition-width duration-300 ${open ? 'w-64' : 'w-24'} md:${open ? 'w-64' : 'w-20'} relative text-white p-5 pt-10`}>
        <MdOutlineKeyboardDoubleArrowLeft
            className={`mt-4 absolute border-2 border-gray-700 text-3xl bg-white text-black rounded-full cursor-pointer transition-transform duration-300 ${open ? '-right-3 rotate-0' : '-right-3 rotate-180'}`}
            onClick={toggleSidebar}
        />
        <div className='cursor-pointer flex items-center'>
            <Image 
                src="/image/logo/trackerteer.png" 
                alt="Logo" 
                height={40} 
                width={40} 
                className={`block float-left mr-2 duration-500 ${open ? 'rotate-0 h-auto w-auto' : 'rotate-80 h-[60px] w-[200px]'}`}
            />
          
            <div className='flex justify-center items-center text-center'>
                <h1 className={`text-lg origin-left font-semibold transition-transform duration-300 ${!open ? 'scale-0' : 'scale-100'}`}>
                    Trackerteer
                </h1>
            </div>
        </div>
        <div className={`flex items-center rounded-md border border-gray-300 mt-6 py-2 ${open ? 'px-2.5' : 'px-4'}`}>
            <FaSearch
                className={`text-white text-2xl block float-left cursor-pointer ${open && 'mr-2'}`}
            />
            <input 
                type="search" 
                placeholder='Search' 
                className={`w-full bg-transparent border-none focus:outline-none placeholder:text-white ${!open ? 'hidden' : ''}`} 
            />
        </div>
        <ul>
            {Menu.map((menu, index) => (
                <li key={index} className='text-sm my-2'>
                    <a
                        href={menu.href}
                        className={`flex items-center rounded-md p-2 hover:text-black hover:bg-gray-300 ${menu.isActive ? 'bg-gray-200 text-black' : 'text-white'}`}
                        onClick={menu.submenu ? handleDropdownClick : undefined}
                    >
                        {menu.icon}
                        <span className={`ml-3 ${open ? 'block' : 'hidden'}`}>{menu.label}</span>
                        {menu.submenu && (
                            <span className={`ml-auto transition-transform duration-400 ${dropdownOpen ? 'rotate-80' : ''}`}>
                                {dropdownOpen ? <MdExpandLess size={25} /> : <MdExpandMore size={25} />}
                            </span>
                        )}
                    </a>
                    {menu.submenu && dropdownOpen && open && (
                        <ul className="ml-6 mt-2">
                            {menu.submenu.map((submenu, subIndex) => (
                                <li key={subIndex} className="text-sm my-1">
                                    <a
                                        href={submenu.href}
                                        className="flex items-center text-white hover:text-black rounded-md p-2 hover:bg-gray-300"
                                    >
                                        <span>{submenu.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    </div>
</main>
    );
};

export default Sidebar;

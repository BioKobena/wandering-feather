"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import logo from "./feather.ico";
const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor("rgba( 255, 255, 255, 0.1 )");
                setTextColor("#ffff");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };
    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
        >
            {/* Sample for news */}

            {isVisible && (
                <div className="relative bg-green-500 text-center xs:bg-yellow-500 sm:bg-red-500 md:bg-blue-500 lg:bg-indigo-500 xl:bg-purple-500 3xl:bg-gray-500 p-2">
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-600 rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    Bienvenue sur la plume vagabonde😁
                </div>
            )}
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
                <Link href="/">
                   Plume vagabonde
                </Link>
                <ul
                    style={{ color: `${textColor}` }}
                    className="hidden sm:flex"
                >
                    <li className="p-4 font-(family-name:--font-karla) font-medium">
                        <Link href="/">Histoires</Link>
                    </li>
                    <li className="p-4 font-(family-name:--font-karla) font-medium">
                        <Link href="/poems">Poèmes</Link>
                    </li>
                    <li className="p-4 font-(family-name:--font-karla) font-medium">
                        <Link href="/story">Inspirations</Link>
                    </li>
                    <li className="p-4 font-(family-name:--font-karla) font-medium">
                        <Link href="/about">À propos</Link>
                    </li>
                    <li className="p-4 font-(family-name:--font-karla) font-medium">
                        <Link href="/contact">Contacts</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className="block sm:hidden z-10">
                    {nav
                        ? (
                            <AiOutlineClose
                                size={20}
                                style={{ color: `${textColor}` }}
                            />
                        )
                        : (
                            <AiOutlineMenu
                                size={20}
                                style={{ color: `${textColor}` }}
                            />
                        )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={nav
                        ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                        : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}
                >
                    <ul>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/">Histoires</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/poems">Poèmes</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/story">Inspirations</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/about">À propos</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/contact">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

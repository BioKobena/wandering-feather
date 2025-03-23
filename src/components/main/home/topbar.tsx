"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import featherLight from "@/assets/images/plume-light.png";
import featherDark from "@/assets/images/plume-dark.png";
import feather from "@/assets/images/feather.png";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

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
                setColor("#ffffff");
                setTextColor("#000000");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        };
        window.addEventListener("scroll", changeColor);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
        >
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
                <Link href="/">
                    <Image
                        className="dark:invert bg-background-inherit"
                        src={featherDark}
                        // src={feather}
                        alt="Vercel logomark"
                        width={150}
                        height={150}
                        // src="../../../assets/images/plume-light.png"
                    />
                </Link>
                <ul
                    style={{ color: `${textColor}` }}
                    className="hidden sm:flex"
                >
                    <li className="p-4">
                        <Link href="/">Histoires</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/poems">Poèmes</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/poems">Inspirations</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/about">À propos</Link>
                    </li>
                    <li className="p-4">
                        <Link href="/contact">Contacts</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className="block sm:hidden z-10">
                    {nav
                        ? (
                            // <p>Tiens</p>
                            <AiOutlineClose
                                size={20}
                                style={{ color: `${textColor}` }}
                            />
                        )
                        : (
                            // <p>Tiens</p>
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
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/#portfolio">My roads</Link>
                        </li>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

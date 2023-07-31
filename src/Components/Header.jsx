"use client";
import useColorMode from "@/hooks/useColorMode";
import Link from "next/link";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
//import { Moon } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <Link href="/">
          <h2 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Ali
          </h2>
        </Link>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav
        className={` ${
          !isOpen ? "hidden" : null
        } text-center md:flex justify-between`}
      >
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <Link href="/" onClick={toggleClass}>
              Home
            </Link>
          </li>
          <li className="pb-1 md:pb-0">
            <Link href="/projects" onClick={toggleClass}>
              Projets
            </Link>
          </li>
          <li className="pb-1 md:pb-0">
            <Link href="/reviews" onClick={toggleClass}>
              Temoignage
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleClass}>
              Contact
            </Link>
          </li>
          <li>
            {/* toggle dark theme */}
            {colorMode === "dark" ? (
              <FaSun
                onClick={() => setColorMode("light")}
                className="text-xl cursor-pointer manz1"
              />
            ) : (
              <FaMoon
                onClick={() => setColorMode("dark")}
                className="text-xl cursor-pointer"
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

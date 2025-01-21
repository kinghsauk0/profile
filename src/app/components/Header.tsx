"use client";

import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";

const items = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleItemClick = (item: { name: string; href: string }) => {
    setActiveItem(item.name); // Set active item state
    if(window.location.hash = item.href){
       <a href={item.href}></a>
    }; // Update URL hash
  };

  return (
    <div className="bg-purple-950/50 text-white fixed top-0 left-0 w-full z-50">
      {/* Container for header */}
      <div className="flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <h1 className="text-2xl font-bold">
            <span className="text-2xl font-bold text-pink-700">{"{ }"}</span> Kingshuk Mondal
          </h1>
        </motion.div>

        {/* Hamburger Menu (visible on mobile) */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className={`${
                  activeItem === item.name ? "bg-[#00FF00]" : "bg-transparent"
                } rounded-md py-2 px-4 cursor-pointer`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={
                  activeItem === item.name
                    ? { scale: 1.1, opacity: 1 }
                    : { scale: 1, opacity: 0.8 }
                }
                onClick={() => handleItemClick(item)} // Update active item and hash on click
              >
                <a
                  href={item.href}
                  className={`${
                    activeItem === item.name ? "text-black" : "text-white"
                  } hover:text-gray-300 transition duration-200`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className={`${
                  activeItem === item.name ? "bg-[#00FF00]" : "bg-transparent"
                } rounded-md py-2 px-4 cursor-pointer`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={
                  activeItem === item.name
                    ? { scale: 1.1, opacity: 1 }
                    : { scale: 1, opacity: 0.8 }
                }
                onClick={() => handleItemClick(item)} // Update active item and hash on click
              >
                <a
                  href={item.href}
                  className={`${
                    activeItem === item.name ? "text-black" : "text-white"
                  } hover:text-gray-300 transition duration-200`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

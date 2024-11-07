// NavigationMenu.tsx
"use client" 

import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle"; 
import { UserIcon } from "@heroicons/react/24/outline"; 
import MenuToggle from "./MenuToggle"; // Importando MenuToggle

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex min-h-screen flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-all duration-300 will-change-transform">
      {/* Menu Toggle - visível apenas em telas pequenas */}
      <div className="md:hidden">
        <MenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* Links de navegação */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute inset-0 z-10 bg-gray-800 bg-opacity-90 md:flex md:flex-row md:static items-center gap-8 text-sm font-semibold tracking-tight transition-all duration-300`}
      >
        <a href="#services" className="hover:text-blue-500 transition-all duration-300">
          Serviços
        </a>
        <a href="#about" className="hover:text-blue-500 transition-all duration-300">
          Quem Somos
        </a>
        <a href="#contact" className="hover:text-blue-500 transition-all duration-300">
          Contato
        </a>
        <DarkModeToggle />
        <a
          href="#login"
          className="flex items-center gap-1 hover:text-blue-500 transition-all duration-300"
          aria-label="Login"
        >
          <UserIcon className="h-5 w-5" />
        </a>
      </div>

      {/* Menu para telas pequenas */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-10`}
      >
        <a href="#services" className="text-white text-lg py-3">
          Serviços
        </a>
        <a href="#about" className="text-white text-lg py-3">
          Quem Somos
        </a>
        <a href="#contact" className="text-white text-lg py-3">
          Contato
        </a>
        <div className="py-3">
          <DarkModeToggle />
        </div>
        <a
          href="#login"
          className="flex items-center gap-1 text-white text-lg py-3"
          aria-label="Login"
        >
          <UserIcon className="h-5 w-5" />
        </a>
      </div>
    </nav>
  );
};

export default NavigationMenu;

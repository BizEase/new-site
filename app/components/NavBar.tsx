"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <nav className="text-sm font-bold text-blue-900 dark:text-white">
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Abrir menu</span>
          <svg
            className={`w-6 h-6 transition-transform transform ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Links de Navegação para Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/servicos" className="hover:text-blue-500">
            Serviços
          </Link>
          {/* Alterei de #about para /quem-somos */}
          <Link href="/quem-somos" className="hover:text-blue-500">
            Quem Somos
          </Link>
          <Link href="#contact" className="hover:text-blue-500">
            Contato
          </Link>
          <DarkModeToggle />
          <Link href="#login" className="hover:text-blue-500">
            Login
          </Link>
        </div>
      </div>

      {/* Menu Dropdown para Mobile */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-100 border-t border-gray-300 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className="flex flex-col items-start px-4 py-2 space-y-2">
          <Link
            href="/servicos"
            className="block w-full py-2 hover:text-blue-500"
          >
            Serviços
          </Link>
          {/* Alterei de #about para /quem-somos */}
          <Link href="/quem-somos" className="block w-full py-2 hover:text-blue-500">
            Quem Somos
          </Link>
          <Link
            href="#contact"
            className="block w-full py-2 hover:text-blue-500"
          >
            Contato
          </Link>
          <DarkModeToggle />
          <Link href="#login" className="block w-full py-2 hover:text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

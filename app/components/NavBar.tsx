// components/NavBar.tsx
"use client";

import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { UserIcon } from "@heroicons/react/24/outline";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen(!isOpen);

  return (
    <nav className="flex-col md:flex-row md:flex items-center gap-8 text-sm font-semibold tracking-tight">
      {/* Botão de Menu Hamburguer em telas pequenas */}
      <button
        className="md:hidden flex items-center justify-center text-blue-900"
        onClick={toggleMenu}
      >
        <span className="sr-only">Abrir menu</span>
        {/* Ícone do menu Hamburguer */}
        <svg
          className="w-6 h-6"
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

      {/* Links de Navegação */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-8 flex-col md:flex-row gap-4 md:ml-auto`}
      >
        <a href="#services" className="hover:text-blue-500">
          Serviços
        </a>
        <a href="#about" className="hover:text-blue-500">
          Quem Somos
        </a>
        <a href="#contact" className="hover:text-blue-500">
          Contato
        </a>
        <DarkModeToggle />

        {/* Ícone de Login */}
        <a
          href="#login"
          className="flex items-center gap-1 hover:text-blue-500"
          aria-label="Login"
        >
          <UserIcon className="h-5 w-5" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

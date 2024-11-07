"use client"

import { useState, useEffect } from "react";
import { SunIcon } from "@heroicons/react/24/outline";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Adiciona ou remove a classe 'dark' ao <html> com base no estado de darkMode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      title="Toggle dark mode"
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-1 hover:text-blue-500 transition-colors"
    >
      <SunIcon className="h-5 w-5" />
    </button>
  );
}

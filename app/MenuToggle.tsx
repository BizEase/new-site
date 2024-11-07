"use client"

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export default function MenuToggle() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <button
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-white" /> : <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" />}
    </button>
  );
}

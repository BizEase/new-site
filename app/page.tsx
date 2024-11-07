import DarkModeToggle from "./components/DarkModeToggle";
import AcmeLogo from "./components/AcmeLogo";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-cover bg-center text-gray-900 dark:text-white dark:bg-gray-900 transition-all duration-150 ease-in-out">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-opacity-90 bg-gray-50 dark:bg-gray-900 transition-colors duration-150 ease-in-out">
        <div className="flex items-center gap-2">
          <AcmeLogo />
        </div>

        {/* Navigation Links */}
        <nav className="flex-col md:flex-row md:flex items-center gap-8 text-sm font-semibold tracking-tight transition-all duration-150 ease-in-out">
          <a href="#services" className="hover:text-blue-500 transition-all duration-150 ease-in-out">
            Serviços
          </a>
          <a href="#about" className="hover:text-blue-500 transition-all duration-150 ease-in-out">
            Quem Somosssss
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-all duration-150 ease-in-out">
            Contato
          </a>
          <DarkModeToggle />
          <a href="#login" className="flex items-center gap-1 hover:text-blue-500 transition-all duration-150 ease-in-out" aria-label="Login">
            <UserIcon className="h-5 w-5" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center md:px-12 transition-all duration-150 ease-in-out">
        <h1 className="text-3xl font-black md:text-5xl md:w-3/4 transition-all duration-150 ease-in-out">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-4 text-lg font-light md:text-xl md:w-3/4 transition-all duration-150 ease-in-out">
          A utility-first CSS framework packed with classes like{" "}
          <code className="font-mono text-blue-500">flex</code>,{" "}
          <code className="font-mono text-blue-500">pt-4</code>, and{" "}
          <code className="font-mono text-blue-500">rotate-90</code>.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
          <Link href="/login" className="flex items-center justify-center self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-400 transition-all duration-150 ease-in-out md:text-base">
            <span>Get Started</span>
          </Link>
          <Link href="/login" className="rounded-lg border border-blue-500 px-6 py-3 text-blue-500 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-150 ease-in-out">
            Learn More
          </Link>
        </div>
      </section>

      {/* Secondary Content Section */}
      <section className="flex grow flex-col gap-4 md:flex-row transition-all duration-150 ease-in-out">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl md:text-3xl md:leading-normal transition-all duration-150 ease-in-out">
            <strong>Marketing sem Complicação.</strong> Calcule o investimento necessário para conseguir novos clientes.
          </p>
          <Link href="/login" className="flex items-center justify-center self-start rounded-lg bg-blue-500 px-10 py-3 text-sm font-medium text-white hover:bg-blue-400 transition-all duration-150 ease-in-out md:text-base">
            <span>Login</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image src="/hero-desktop.png" width={1000} height={760} className="hidden md:block" alt="Screenshots of the dashboard project showing desktop version" />
          <Image src="/hero-mobile.png" width={560} height={620} className="block md:hidden" alt="Screenshot of the dashboard project showing mobile version" />
        </div>
      </section>
    </main>
  );
}

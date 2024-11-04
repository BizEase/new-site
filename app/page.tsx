/* export default function Page() {
  return (
    <div className="min-h-screen bg-lightGray text-textDark flex flex-col items-center justify-center">
      <header className="w-full bg-primaryBlue text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo à BizEase</h1>
        <p className="mt-2 text-lg">Marketing descomplicado para profissionais liberais</p>
      </header>

      <main className="flex flex-col items-center mt-10">
        <section className="max-w-3xl text-center mb-8">
          <h2 className="text-2xl font-semibold text-primaryBlue mb-4">Transforme Seu Negócio Hoje!</h2>
          <p className="text-lg text-gray-700">
            Nossa missão é simplificar o marketing para que você possa focar nos resultados. A BizEase oferece soluções diretas, sem complicações.
          </p>
        </section>

        <button className="px-6 py-3 mt-4 bg-primaryOrange text-white font-semibold rounded-full hover:bg-opacity-90">
          Vamos Conversar
        </button>

        <div className="flex flex-col items-center mt-10 space-y-4">
          <div className="bg-primaryBlue text-white p-4 rounded-md w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold">Marketing sem Complicação</h3>
            <p className="text-sm mt-2">Cresça com estratégias simples e eficazes.</p>
          </div>
          <div className="bg-accentMint text-white p-4 rounded-md w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold">Resultados Comprovados</h3>
            <p className="text-sm mt-2">Aumente seu impacto com nosso método.</p>
          </div>
        </div>
      </main>

      <footer className="w-full bg-primaryBlue text-white py-4 mt-10 text-center">
        <p>&copy; {new Date().getFullYear()} BizEase - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
} */

import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <header className="flex items-center justify-between p-4 bg-blue-500">
        <div className="flex items-center gap-2">
          <AcmeLogo />
        </div>
        <nav className="flex gap-8 text-gray-50">
          <a href="#services" className="hover:text-gray-200 transition-colors">
            Serviços
          </a>
          <a href="#about" className="hover:text-gray-200 transition-colors">
            Quem Somos
          </a>
          <a href="#contact" className="hover:text-gray-200 transition-colors">
            Contato
          </a>
        </nav>
      </header>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-0 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className="text-xl text-gray-800 md:text-3xl md:leading-normal"
          >
            <strong>Marketing sem Complicação.</strong> Calcule o investimento necessário para conseguir novos clientes.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}

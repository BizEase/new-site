import Logo from "./components/Logo";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Page() {
  return ( //  bg-diagonal-stripes bg-cover bg-center
    <main className="flex min-h-screen flex-col bg-white dark:bg-blue-900 text-blue-900 dark:text-white">
      {" "}
      {/* Header Section */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <NavBar />
      </header>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center md:px-12">
        <h1 className="text-3xl font-black md:text-5xl md:w-3/4">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-4 text-l font-light md:text-2xl md:w-3/4">
          A utility-first CSS framework packed with classes like{" "}
          <code className="font-mono text-blue-500">flex</code>,{" "}
          <code className="font-mono text-blue-500">pt-4</code>, and{" "}
          <code className="font-mono text-blue-500">rotate-90</code> that can be
          composed to build any design, directly in your markup.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
          <Link
            href="/login"
            className="flex items-center justify-center self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-400 md:text-base"
          >
            <span>Get Started</span>
          </Link>
          <Link
            href="/login"
            className="rounded-lg border border-blue-500 px-6 py-3 text-blue-500 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800"
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* Secondary Content Section */}
      <section className="flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl md:text-3xl md:leading-normal">
            <strong>Marketing sem Complicação.</strong> Calcule o investimento
            necessário para conseguir novos clientes.
          </p>
          <Link
            href="/login"
            className="flex items-center justify-center self-start rounded-lg bg-blue-500 px-10 py-3 text-sm font-medium text-white hover:bg-blue-400 md:text-base"
          >
            <span>Login</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
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
      </section>
    </main>
  );
}

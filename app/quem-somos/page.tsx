import Link from "next/link";
import { nunito } from "../config/fonts";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 text-center md:px-16 md:py-32">
      <h1 className="text-3xl font-black md:text-5xl md:w-3/4">Quem Somos</h1>
      <p className={`${nunito.className} py-12 text-l md:text-xl md:w-3/4`}>
        A utility-first CSS framework packed with classes like{" "}
        <code className="font-mono text-blue-400">flex</code>,{" "}
        <code className="font-mono text-blue-400">pt-4</code>, and{" "}
        <code className="font-mono text-blue-400">rotate-90</code> that can be
        composed to build any design, directly in your markup.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
        <Link
          href="/login"
          className="flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-400 md:text-base"
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

      <section className="flex flex-col md:flex-row gap-4 mt-16 items-center justify-center">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl md:text-3xl md:leading-normal">
            <strong>Marketing sem Complicação.</strong> Calcule o investimento
            necessário para conseguir novos clientes.
          </p>
        </div>
      </section>
    </section>
  );
}

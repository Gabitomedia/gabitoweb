import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-7">

        {/* Logo */}
        <a
          href="#"
          className="text-sm font-bold tracking-[0.2em] text-white"
        >
          GDT
        </a>

        {/* Links */}
        <ul className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">

          <li>
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition-colors hover:text-white"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="transition-colors hover:text-white"
            >
              Services
            </a>
          </li>

        </ul>

        {/* Contact */}
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-105"
        >
          Let's talk
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

      </nav>
    </header>
  );
}
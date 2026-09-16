"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div>
            <p className="text-lg font-bold tracking-[0.2em]">
              GDT
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Video Editor · Filmmaker · Creator
            </p>

            <p className="mt-1 text-xs text-zinc-700">
              Available for freelance & remote projects
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">

            <a
              href="https://www.youtube.com/@DELRIOBA"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              YouTube
            </a>

            <a
              href="https://www.tiktok.com/@gabitotcg"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              TikTok
            </a>

            <a
              href="https://www.instagram.com/delrioba_yt/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://x.com/GabitoTCG"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              X
            </a>

            <a
              href="mailto:eugenioditieri@gmail.com"
              className="group flex items-center gap-1 transition hover:text-white"
            >
              Contact

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

          {/* Back to top */}
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition hover:border-violet-500/40 hover:text-white"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.a>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between">
          <span>
  © {new Date().getFullYear()} Gabriel Di Tieri · Video Editor & Creator
</span>

        
        </div>

      </div>
    </footer>
  );
}
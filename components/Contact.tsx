"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Copy,
  Mail,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "eugenioditieri@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="relative bg-black px-6 py-32 text-white md:px-10 md:py-40">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-16 text-center md:px-12 md:py-24"
        >
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-violet-400">
            Let's Work Together
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
            Have a project
            <br />
            <span className="text-zinc-500">in mind?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-500">
            Tell me what you're working on and let's create something
            people want to watch.
          </p>

          {/* Email buttons */}
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${email}`}
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-violet-600 px-7 py-4 font-semibold transition hover:scale-[1.02] hover:bg-violet-500 sm:w-auto"
            >
              <Mail size={18} />

              Send me an email

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <button
              onClick={copyEmail}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-sm font-medium text-zinc-300 transition hover:border-violet-500/40 hover:bg-white/10 sm:w-auto"
            >
              {copied ? (
                <>
                  <Check size={17} className="text-violet-400" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={17} />
                  Copy email
                </>
              )}
            </button>
          </div>

          {/* Social links */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-white/10 pt-10">
            <a
              href="https://www.instagram.com/delrioba_yt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Instagram
            </a>

            <span className="text-zinc-800">•</span>

            <a
              href="https://www.tiktok.com/@gabitotcg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              TikTok
            </a>

            <span className="text-zinc-800">•</span>

            <a
              href="https://www.youtube.com/@DELRIOBA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              YouTube
            </a>

            <span className="text-zinc-800">•</span>

            <a
              href="https://x.com/lifeinmp4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              X
            </a>

            <span className="text-zinc-800">•</span>

            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
            >
              <Mail size={17} />
              {email}
            </a>
          </div>

          {/* Availability */}
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-zinc-700">
            Available for freelance & remote projects
          </p>
        </motion.div>
      </div>
    </section>
  );
}
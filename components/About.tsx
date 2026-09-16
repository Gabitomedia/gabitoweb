"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Check } from "lucide-react";

const skills = [
  "Video Editing",
  "Storytelling",
  "Short-form Content",
  "Filming",
  "Scriptwriting",
  "Sound Design",
  "Color Grading",
  "Motion Graphics",
  "AI Creative",
 ];
 
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:py-40"
    >
      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-violet-400">
              About Me
            </p>

            <h2 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              I don't just
              <br />
              <span className="text-zinc-500">
                edit footage.
              </span>
              <br />
              I build stories.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
  I'm Gabriel, a video editor, filmmaker and content creator
  focused on turning ideas into content people actually want to watch.
</p>

<p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-500">
  I've worked across the creative process — from developing ideas
  and writing scripts to filming, editing, sound design and
  delivering the final piece.
</p>
<div className="mt-10 border-t border-white/5 pt-6">
  <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
    Availability
  </p>

  <p className="mt-2 text-sm text-zinc-400">
    Based in Argentina · Available for remote projects
  </p>
</div>
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              Let's work together
              <ArrowDownRight size={18} className="text-violet-400" />
            </motion.a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Decorative card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">

              <div className="mb-10">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  Skills
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-3 border-b border-white/5 pb-4"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/10">
                      <Check size={12} className="text-violet-400" />
                    </div>

                    <span className="text-sm text-zinc-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Clapperboard,
  Film,
  PenTool,
  Smartphone,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Film,
    title: "Video Editing",
    description:
      "Professional editing for YouTube, social media and long-form content. Clean pacing, storytelling and polished final cuts.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Short-form Content",
    description:
      "TikTok, Reels and Shorts built around strong hooks, fast pacing, subtitles and retention-focused editing.",
  },
  {
    number: "03",
    icon: Clapperboard,
    title: "Filming & Production",
    description:
      "From camera to final cut. I can handle filming and production when the project requires original footage.",
  },
  {
    number: "04",
    icon: PenTool,
    title: "Scriptwriting",
    description:
      "Ideas, structure and scripts designed to turn concepts into engaging videos with a clear story and purpose.",
  },
  {
    number: "05",
    icon: WandSparkles,
    title: "Motion & VFX",
    description:
      "Motion graphics, visual effects, transitions and compositing that enhance the story without overwhelming it.",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "AI Creative",
    description:
      "AI-assisted visual workflows for concept development, creative experimentation, cinematic visuals and storytelling.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-900/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-violet-400">
            What I Do
          </p>

          <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            More than
            <br />
            <span className="text-zinc-500">just editing.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-500">
            From the first idea to the final export, I can help turn
            your concept into content people want to watch.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative min-h-[300px] border-b border-r border-white/10 p-8 transition-colors duration-500 hover:bg-white/[0.03] md:p-10"
              >
                {/* Number */}
                <span className="absolute right-8 top-8 text-xs tracking-[0.3em] text-zinc-700">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mb-12 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 group-hover:border-violet-500/40 group-hover:bg-violet-500/10">
                  <Icon
                    size={22}
                    className="text-zinc-400 transition-colors duration-500 group-hover:text-violet-400"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-500 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
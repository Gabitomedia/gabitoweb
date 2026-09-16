"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white">

      {/* Glow central */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Segundo glow */}
      <motion.div
        className="absolute -left-40 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-900/20 blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        {/* Categoría */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-sm font-medium uppercase tracking-[0.5em] text-violet-400"
        >
          Video Editor
        </motion.p>

        {/* Nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-6xl font-black leading-[0.9] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[9rem]"
        >
          GABITO
          <br />
          DI TIERI
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          I edit. I create. I make people watch.
          <br />
          Social Media · YouTube · Reels · Shorts
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowreelOpen(true)}
            className="rounded-full bg-violet-600 px-8 py-4 font-semibold shadow-lg shadow-violet-900/30 transition-colors hover:bg-violet-500"
          >
            Watch Showreel
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-md transition-colors hover:border-violet-500/50 hover:bg-white/10"
          >
            Contact Me
          </motion.button>
        </motion.div>

      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xs uppercase tracking-[0.3em] text-zinc-600"
        >
          Scroll
        </motion.div>
      </motion.div>

    {showreelOpen && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
    onClick={() => setShowreelOpen(false)}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >

      {/* Close */}
      <button
        onClick={() => setShowreelOpen(false)}
        className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
        aria-label="Close showreel"
      >
        <X size={18} />
      </button>

      {/* Video */}
      <div className="aspect-video w-full bg-black">
        <video
          src="https://res.cloudinary.com/jnxody4m/video/upload/v1789570824/showreel-test.mp4"
          controls
          autoPlay
          playsInline
          className="h-full w-full object-contain"
        />
      </div>

    </motion.div>
  </div>
)}
    </section>
  );
}
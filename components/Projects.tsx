"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, Pause, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    category: "MUSIC VIDEO",
    title: "Nobewan — IL RAPPA",
    description:
      "Music video production Role: Filming, Video Editing, Color Grading, Storytelling, Post-production.",
    video: "https://res.cloudinary.com/jnxody4m/video/upload/v1789570483/01-il-rappa.mp4",
    thumbnail: "/images/il-rappa.webp",
  },
  {
    number: "02",
    category: "MUSIC VIDEO",
    title: "NahueMC x Nobewan — Estrictos",
    description:
      "Music video focused on rhythm, pacing and cinematic editing.",
    video: "https://res.cloudinary.com/jnxody4m/video/upload/v1789570475/02-estrictos.mp4",
    thumbnail: "/images/estrictos.webp",
  },
  {
    number: "03",
    category: "AI / CREATIVE",
    title: "Buenos Aires",
    description:
      "AI-assisted visual concept combining generated imagery, editing and storytelling.",
    video: "https://res.cloudinary.com/jnxody4m/video/upload/v1789570461/03-obelisco.mp4",
    thumbnail: "/images/obelisco.webp",
  },
  {
    number: "04",
    category: "COMMERCIAL",
    title: "Niggaz BarberShop",
    description:
      "Commercial content created for a local business in Mar del Plata.",
    video: "https://res.cloudinary.com/jnxody4m/video/upload/v1789570465/04-barbershop.mp4",
    thumbnail: "/images/barbershop.webp",
  },
  {
    number: "05",
    category: "AI / CINEMATIC",
    title: "Mar del Plata — Aftermath",
    description:
      "A cinematic post-apocalyptic concept created through AI-assisted visuals and editing.",
    video: "https://res.cloudinary.com/jnxody4m/video/upload/v1789570828/05-4KMDP.mp4",
    thumbnail: "/images/4kmdp.webp",
  },

  
  {
    number: "06",
    category: "GAMING",
    title: "Gaming Montage",
    description:
      "Fast-paced gameplay editing combining kills, sound design, memes and visual effects.",
    video: "https://res.cloudinary.com/jnxody4m/video/upload/v1789573137/06-gaming.mp4",
  },
  
];

export default function Projects() {
  const [playingProject, setPlayingProject] = useState<string | null>(null);
const [hoveredProject, setHoveredProject] = useState<string | null>(null);
const [showControls, setShowControls] = useState(true);
const [selectedProject, setSelectedProject] = useState<
  (typeof projects)[number] | null
>(null);
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:py-40"
    >
      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-violet-400">
            Selected Work
          </p>

          <h2 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Work that makes
            <br />
            <span className="text-zinc-500">
              people stop scrolling.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-500">
            A selection of projects across music videos, commercial content,
            AI visuals and cinematic storytelling.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              {/* Video */}
              <div
  className="relative aspect-video overflow-hidden bg-zinc-900"
  onMouseEnter={() => {
    setHoveredProject(project.number);
    setShowControls(true);
  }}
  onMouseLeave={(event) => {
    setHoveredProject(null);
    setShowControls(true);

    const video = event.currentTarget.querySelector("video");

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setPlayingProject(null);
  }}
  onMouseMove={() => {
    setShowControls(true);
  }}
>

                <video
  src={project.video}
  poster={project.thumbnail}
  muted
  loop
  playsInline
  preload="metadata"
  className="h-full w-full cursor-pointer object-cover transition duration-700 group-hover:scale-105"
  onMouseEnter={(event) => {
    event.currentTarget.play().catch(() => {});

    setPlayingProject(project.number);

    setTimeout(() => {
      setShowControls(false);
    }, 1000);
  }}
  onClick={(event) => {
    const video = event.currentTarget;

    if (video.paused) {
      video.play().catch(() => {});
      setPlayingProject(project.number);

      setTimeout(() => {
        setShowControls(false);
      }, 1000);
    } else {
      video.pause();
      setPlayingProject(null);
      setShowControls(true);
    }
  }}
  onPlay={() => {
    setPlayingProject(project.number);
  }}
  onPause={() => {
    setPlayingProject((current) =>
      current === project.number ? null : current
    );

    setShowControls(true);
  }}
/>

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/30 transition duration-500 group-hover:bg-black/10" />

                {/* Play icon */}
               <div
  className={`pointer-events-none absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl transition-all duration-300 ${
    showControls
      ? "scale-100 opacity-100"
      : "scale-90 opacity-0"
  }`}
>
  {playingProject === project.number ? (
    <Pause
      size={20}
      fill="white"
      className="text-white"
    />
  ) : (
    <Play
      size={20}
      fill="white"
      className="ml-1 text-white"
    />
  )}
</div>

                {/* Number */}
                <span className="absolute left-6 top-6 text-xs tracking-[0.3em] text-white/60">
                  {project.number}
                </span>

              </div>

              {/* Information */}
              <div className="p-7">

                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.25em] text-violet-400">
                    {project.category}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-relaxed text-zinc-500">
                  {project.description}
                </p>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
      {selectedProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
    onClick={() => setSelectedProject(null)}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.3 }}
      className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#090909] shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
        aria-label="Close project"
      >
        <X size={18} />
      </button>

      {/* Video */}
      <div className="aspect-video w-full bg-black">
        <video
          src={selectedProject.video}
          poster={selectedProject.thumbnail}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-contain"
        />
      </div>

      {/* Information */}
      <div className="p-7 md:p-10">

        <div className="mb-4 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
            {selectedProject.category}
          </span>

          <span className="text-xs text-zinc-600">
            {selectedProject.number}
          </span>
        </div>

        <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
          {selectedProject.title}
        </h3>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
          {selectedProject.description}
        </p>

      </div>
    </motion.div>
  </div>
)}
    </section>
  );
}
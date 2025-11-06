import { motion } from 'framer-motion';
import { Code, Cpu, Sparkles, Shield } from 'lucide-react';

const projects = [
  {
    title: 'Neon Nexus UI',
    desc: 'A cyberpunk design system with animated components and dark neon palettes.',
    icon: Sparkles,
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Quantum Dash',
    desc: 'Real-time dashboard with WebSockets and GPU-accelerated charts.',
    icon: Cpu,
    tech: ['FastAPI', 'MongoDB', 'WebSockets'],
  },
  {
    title: 'Code Astral',
    desc: 'Interactive 3D portfolio using Spline and shaders for anime-glow effects.',
    icon: Code,
    tech: ['Spline', 'Three.js', 'GLSL'],
  },
  {
    title: 'Sentinel AI',
    desc: 'Security monitoring with anomaly detection and elegant alerting UI.',
    icon: Shield,
    tech: ['Python', 'FastAPI', 'React'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#06010b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Featured Projects
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-fuchsia-400/40 transition"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl group-hover:bg-cyan-400/20" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <p.icon className="h-6 w-6 text-cyan-300" />
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

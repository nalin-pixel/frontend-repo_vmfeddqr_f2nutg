import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0014] to-[#0c001a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.25),transparent_50%)] mix-blend-screen" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight"
          >
            Hi, I’m <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">Dhimas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            A web developer crafting cyberpunk-inspired experiences that blend anime aesthetics with futuristic tech. Smooth motion, sharp code, and immersive interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-900/30 ring-1 ring-white/10 hover:brightness-110 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center rounded-full bg-white/10 backdrop-blur px-5 py-2 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/20 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

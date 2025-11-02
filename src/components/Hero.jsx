import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(79,70,229,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.18),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex min-h-[90vh] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 animate-pulse" />
              <span className="text-xs text-white/80">Available for freelance & full-time</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-sm">
              Futuristic Web Experiences with 3D & Glassmorphism
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl">
              I craft immersive, performant interfaces blending elegant UI, real-time 3D and subtle motion. Purple and black are my canvas; accessibility and clarity drive every decision.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-900/30 transition-transform hover:translate-y-[-2px]"
              >
                View Projects
                <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl hover:bg-white/10"
              >
                <Download size={16} /> Contact Me
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
              {[
                { label: '3D Web', value: '4+ yrs' },
                { label: 'Projects', value: '25+' },
                { label: 'Satisfied', value: '100%' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

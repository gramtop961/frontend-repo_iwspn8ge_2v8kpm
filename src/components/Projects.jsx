import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    description:
      'A headless e-commerce experience with 3D product previews, dynamic lighting and fluid glassmorphism UI.',
    tags: ['React', 'ThreeJS', 'Tailwind', 'Stripe'],
    link: '#',
  },
  {
    title: 'Holo Dashboard',
    description:
      'Realtime analytics dashboard with animated widgets, charts and delightful microinteractions.',
    tags: ['Vite', 'Framer Motion', 'D3', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Orbit Portfolio',
    description:
      'A blazing-fast portfolio template with Spline hero, parallax layers and accessible design system.',
    tags: ['Spline', 'React', 'Accessibility'],
    link: '#',
  },
  {
    title: 'AI Showcase',
    description:
      'Interactive collection of AI demos with canvas shaders, GPU-accelerated effects and smooth UX.',
    tags: ['WebGL', 'Shaders', 'FastAPI'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_20%_10%,rgba(99,102,241,.15),transparent_40%),radial-gradient(800px_circle_at_80%_30%,rgba(217,70,239,.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A selection of recent work. Clean architecture, polished details and thoughtful motion in every build.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            <Code size={16} /> Let’s build together
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-transparent" />

              <div className="relative z-[1]">
                <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-600/40 via-indigo-600/30 to-slate-900/40">
                  <div className="h-full w-full bg-[radial-gradient(200px_200px_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
                  >
                    Visit project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

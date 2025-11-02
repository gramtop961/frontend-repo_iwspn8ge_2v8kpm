import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_-10%_-10%,rgba(124,58,237,0.15),transparent_40%),radial-gradient(900px_circle_at_110%_0%,rgba(79,70,229,0.12),transparent_45%),radial-gradient(1200px_circle_at_50%_120%,rgba(217,70,239,0.12),transparent_45%)]" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />

        <section className="relative py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'About',
                  content:
                    'Frontend engineer passionate about immersive web, performance and accessible design. I blend 3D, motion and sound to craft memorable experiences.',
                },
                {
                  title: 'Skills',
                  content:
                    'React, TypeScript, Tailwind, Framer Motion, ThreeJS/Spline, WebGL/Shaders, FastAPI, MongoDB, GraphQL, CI/CD, Testing.',
                },
                {
                  title: 'Approach',
                  content:
                    'Design systems first, ship quickly, iterate with data. Maintainable code and delightful UX at every step.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)]"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-white/75 text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Projects />
        <Contact />

        <footer className="relative border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
            <a href="#home" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">Back to top</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    // Here we just simulate a submit. Hook up your backend endpoint later if desired.
    setStatus('Thanks! I will get back to you shortly.');
    console.log('Contact form submitted:', payload);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_circle_at_20%_80%,rgba(217,70,239,.12),transparent_45%),radial-gradient(600px_circle_at_80%_30%,rgba(99,102,241,.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center"
          >
            Let’s create something remarkable
          </motion.h2>
          <p className="mt-2 text-center text-white/70">
            Tell me about your project, timeline and goals. I’ll reply within 24 hours.
          </p>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-white/70">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wide text-white/70">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wide text-white/70">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                placeholder="Tell me about your idea..."
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-900/30 hover:translate-y-[-2px] transition-transform"
              >
                Send Message
              </button>
              {status && <span className="text-sm text-emerald-300/90">{status}</span>}
            </div>
          </motion.form>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:me@example.com"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10"
            >
              <Mail size={18} /> me@example.com
            </a>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10"
              >
                <Phone size={18} /> Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

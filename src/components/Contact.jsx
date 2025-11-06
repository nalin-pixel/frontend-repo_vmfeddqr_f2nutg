import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#06010b] to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Let’s Build Something Stellar
        </motion.h2>

        <form onSubmit={onSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="text-sm text-gray-300">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              placeholder="Your name"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              placeholder="you@domain.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3 text-white ring-1 ring-white/10 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              placeholder="Tell me about your idea..."
              required
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="h-4 w-4" /> Prefer email? hello@dhimas.dev
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-6 py-3 font-semibold shadow-lg shadow-fuchsia-900/30 ring-1 ring-white/10 hover:brightness-110 transition"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </div>
          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="sm:col-span-2 text-cyan-300"
            >
              Message sent! I’ll get back to you soon.
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/50 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleScroll('home')}
            className="group flex items-center gap-2 text-cyan-300 hover:text-fuchsia-300 transition-colors"
          >
            <Rocket className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">dhimas.dev</span>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => handleScroll('projects')} className="text-gray-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => handleScroll('contact')} className="text-gray-300 hover:text-white transition-colors">
              Contact
            </button>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:hello@dhimas.dev" className="text-gray-300 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

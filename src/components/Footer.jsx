export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {year} dhimas — Crafted with neon, code, and caffeine.</p>
        <p className="text-sm">Cyberpunk x Anime x Tech</p>
      </div>
    </footer>
  );
}

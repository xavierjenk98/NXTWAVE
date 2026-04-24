"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-widest uppercase text-white">
          NXTWAVE LIVE
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/music" className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">
            Music
          </Link>
          <Link href="/comedy" className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">
            Comedy
          </Link>
        </div>
        <button
          className="md:hidden text-white/80 hover:text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0a]">
          <Link href="/music" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white">
            Music
          </Link>
          <Link href="/comedy" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white">
            Comedy
          </Link>
        </div>
      )}
    </nav>
  );
}

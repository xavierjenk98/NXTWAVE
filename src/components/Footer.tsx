import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-black text-lg tracking-widest uppercase">NXTWAVE LIVE</p>
          <p className="text-white/50 text-sm mt-1">© {new Date().getFullYear()} NXTWAVE LIVE. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
          <a href="https://instagram.com/thenxtwave" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">
            Instagram @thenxtwave
          </a>
          <span className="hidden md:block">·</span>
          <a href="mailto:hello@nxtwavelive.com" className="hover:text-white transition-colors">
            hello@nxtwavelive.com
          </a>
          <span className="hidden md:block">·</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <span className="hidden md:block">·</span>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import LaneNav from "@/components/LaneNav";
import DropAlerts from "@/components/DropAlerts";

export const metadata = { title: "Music Shows — NXTWAVE LIVE" };

export default function MusicPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">NXTWAVE LIVE</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest text-white mb-4">
            Music Shows
          </h1>
          <p className="text-white/60 max-w-xl">
            Live music events across the US — tickets, lineups, and applications for artists ready to perform.
          </p>
        </div>

        <div className="mb-10">
          <LaneNav lane="music" />
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/20 p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-widest">Ready to Perform?</h2>
            <p className="text-white/60 mt-2">Apply to get on stage or grab tickets for upcoming shows.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/music/tickets" className="bg-white text-black font-black uppercase tracking-widest text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
              Get Tickets
            </Link>
            <Link href="/music/apply" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-widest text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Apply
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href="/music/tickets" className="group rounded-xl border border-white/10 hover:border-purple-500/40 bg-white/5 p-6 transition-all">
            <h3 className="text-lg font-black uppercase tracking-widest mb-2">Tickets</h3>
            <p className="text-white/50 text-sm">Upcoming shows and ticket links.</p>
            <span className="inline-block mt-4 text-purple-400 text-sm font-bold group-hover:text-purple-300 transition-colors">View →</span>
          </Link>
          <Link href="/music/lineup" className="group rounded-xl border border-white/10 hover:border-purple-500/40 bg-white/5 p-6 transition-all">
            <h3 className="text-lg font-black uppercase tracking-widest mb-2">Lineup</h3>
            <p className="text-white/50 text-sm">Artists dropping soon.</p>
            <span className="inline-block mt-4 text-purple-400 text-sm font-bold group-hover:text-purple-300 transition-colors">View →</span>
          </Link>
          <Link href="/music/apply" className="group rounded-xl border border-white/10 hover:border-purple-500/40 bg-white/5 p-6 transition-all">
            <h3 className="text-lg font-black uppercase tracking-widest mb-2">Apply</h3>
            <p className="text-white/50 text-sm">Apply to perform on NXTWAVE LIVE.</p>
            <span className="inline-block mt-4 text-purple-400 text-sm font-bold group-hover:text-purple-300 transition-colors">Apply →</span>
          </Link>
        </div>

        <DropAlerts />
      </div>
    </div>
  );
}

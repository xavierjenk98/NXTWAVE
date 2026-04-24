import Link from "next/link";
import LaneNav from "@/components/LaneNav";
import DropAlerts from "@/components/DropAlerts";

export const metadata = { title: "Comedy Shows — NXTWAVE LIVE" };

export default function ComedyPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">NXTWAVE LIVE</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-widest text-white mb-4">
            Comedy Shows
          </h1>
          <p className="text-white/60 max-w-xl">
            Live comedy events across the US — tickets, lineups, and applications for comedians ready to perform.
          </p>
        </div>

        <div className="mb-10">
          <LaneNav lane="comedy" />
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-orange-900/50 to-red-900/50 border border-orange-500/20 p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-widest">Ready to Perform?</h2>
            <p className="text-white/60 mt-2">Apply to get on stage or grab tickets for upcoming shows.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/comedy/tickets" className="bg-white text-black font-black uppercase tracking-widest text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
              Get Tickets
            </Link>
            <Link href="/comedy/apply" className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-black uppercase tracking-widest text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Apply
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href="/comedy/tickets" className="group rounded-xl border border-white/10 hover:border-orange-500/40 bg-white/5 p-6 transition-all">
            <h3 className="text-lg font-black uppercase tracking-widest mb-2">Tickets</h3>
            <p className="text-white/50 text-sm">Upcoming shows and ticket links.</p>
            <span className="inline-block mt-4 text-orange-400 text-sm font-bold group-hover:text-orange-300 transition-colors">View →</span>
          </Link>
          <Link href="/comedy/lineup" className="group rounded-xl border border-white/10 hover:border-orange-500/40 bg-white/5 p-6 transition-all">
            <h3 className="text-lg font-black uppercase tracking-widest mb-2">Lineup</h3>
            <p className="text-white/50 text-sm">Comedians dropping soon.</p>
            <span className="inline-block mt-4 text-orange-400 text-sm font-bold group-hover:text-orange-300 transition-colors">View →</span>
          </Link>
          <Link href="/comedy/apply" className="group rounded-xl border border-white/10 hover:border-orange-500/40 bg-white/5 p-6 transition-all">
            <h3 className="text-lg font-black uppercase tracking-widest mb-2">Apply</h3>
            <p className="text-white/50 text-sm">Apply to perform on NXTWAVE LIVE.</p>
            <span className="inline-block mt-4 text-orange-400 text-sm font-bold group-hover:text-orange-300 transition-colors">Apply →</span>
          </Link>
        </div>

        <DropAlerts />
      </div>
    </div>
  );
}

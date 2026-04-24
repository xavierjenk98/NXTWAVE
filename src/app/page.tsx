"use client";
import { useState } from "react";
import Link from "next/link";
import TicketChooserModal from "@/components/TicketChooserModal";
import DropAlerts from "@/components/DropAlerts";
import spotlightsData from "@/content/spotlights.json";
import momentsData from "@/content/featured-moments.json";

type Spotlight = {
  name: string;
  city: string;
  blurb: string;
  image: string | null;
  link: string;
};

type SpotlightsData = {
  music: Spotlight;
  comedy: Spotlight;
};

type Moment = {
  id: number;
  label: string;
  tag: string;
  image: string | null;
};

const spotlights = spotlightsData as SpotlightsData;
const moments = momentsData as Moment[];

export default function HomePage() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  return (
    <>
      <TicketChooserModal isOpen={ticketModalOpen} onClose={() => setTicketModalOpen(false)} />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0a0a0a] to-orange-900/30 pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"}} />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-white/50 mb-6">NXTWAVE LIVE</p>

          {/* Lane Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <Link href="/music" className="group relative rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700/40 to-blue-800/40 group-hover:from-purple-700/60 group-hover:to-blue-800/60 transition-all" />
              <div className="relative p-10 flex flex-col items-center">
                <span className="text-5xl mb-4">🎵</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white">Music Shows</h2>
                <p className="text-white/60 mt-2 text-sm">Tickets · Lineup · Apply</p>
              </div>
            </Link>
            <Link href="/comedy" className="group relative rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/40 to-red-800/40 group-hover:from-orange-600/60 group-hover:to-red-800/60 transition-all" />
              <div className="relative p-10 flex flex-col items-center">
                <span className="text-5xl mb-4">🎤</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white">Comedy Shows</h2>
                <p className="text-white/60 mt-2 text-sm">Tickets · Lineup · Apply</p>
              </div>
            </Link>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setTicketModalOpen(true)}
              className="bg-white text-black font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
            >
              Get Tickets
            </button>
            <Link
              href="/music/apply"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Apply — Music
            </Link>
            <Link
              href="/comedy/apply"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Apply — Comedy
            </Link>
          </div>
        </div>
      </section>

      {/* Drop Alerts */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <DropAlerts />
        </div>
      </section>

      {/* Spotlights */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-widest text-center mb-10">Spotlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={spotlights.music.link} className="group block rounded-2xl border border-purple-500/20 hover:border-purple-500/50 overflow-hidden transition-all">
              <div className="h-48 bg-gradient-to-br from-purple-800/60 to-blue-900/60 flex items-center justify-center">
                {spotlights.music.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={spotlights.music.image} alt={spotlights.music.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl">🎵</span>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Artist Spotlight</p>
                <h3 className="text-xl font-black text-white">{spotlights.music.name}</h3>
                <p className="text-white/50 text-sm">{spotlights.music.city}</p>
                <p className="text-white/70 mt-3 text-sm">{spotlights.music.blurb}</p>
                <span className="inline-block mt-4 text-purple-400 text-sm font-bold group-hover:text-purple-300 transition-colors">
                  View Lineup →
                </span>
              </div>
            </Link>

            <Link href={spotlights.comedy.link} className="group block rounded-2xl border border-orange-500/20 hover:border-orange-500/50 overflow-hidden transition-all">
              <div className="h-48 bg-gradient-to-br from-orange-700/60 to-red-900/60 flex items-center justify-center">
                {spotlights.comedy.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={spotlights.comedy.image} alt={spotlights.comedy.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl">🎤</span>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">Comedian Spotlight</p>
                <h3 className="text-xl font-black text-white">{spotlights.comedy.name}</h3>
                <p className="text-white/50 text-sm">{spotlights.comedy.city}</p>
                <p className="text-white/70 mt-3 text-sm">{spotlights.comedy.blurb}</p>
                <span className="inline-block mt-4 text-orange-400 text-sm font-bold group-hover:text-orange-300 transition-colors">
                  View Lineup →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Moments */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-widest text-center mb-10">Featured Moments</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {moments.map((m) => (
              <div key={m.id} className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 group">
                {m.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.image} alt={m.label} className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${m.tag === "Music" ? "bg-gradient-to-br from-purple-900/40 to-blue-900/40" : "bg-gradient-to-br from-orange-900/40 to-red-900/40"}`}>
                    <span className="text-4xl">{m.tag === "Music" ? "🎵" : "🎤"}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className={`text-xs font-bold uppercase tracking-widest ${m.tag === "Music" ? "text-purple-400" : "text-orange-400"}`}>{m.tag}</span>
                  <p className="text-sm font-bold text-white mt-0.5">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 p-8">
              <h3 className="text-2xl font-black uppercase tracking-widest mb-6">Music Shows</h3>
              <div className="flex flex-col gap-3">
                <Link href="/music/tickets" className="block bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-sm px-5 py-3 rounded-lg text-center transition-colors border border-white/10">
                  Get Tickets
                </Link>
                <Link href="/music/lineup" className="block bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-sm px-5 py-3 rounded-lg text-center transition-colors border border-white/10">
                  View Lineup
                </Link>
                <Link href="/music/apply" className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-widest text-sm px-5 py-3 rounded-lg text-center hover:opacity-90 transition-opacity">
                  Apply to Perform
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20 p-8">
              <h3 className="text-2xl font-black uppercase tracking-widest mb-6">Comedy Shows</h3>
              <div className="flex flex-col gap-3">
                <Link href="/comedy/tickets" className="block bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-sm px-5 py-3 rounded-lg text-center transition-colors border border-white/10">
                  Get Tickets
                </Link>
                <Link href="/comedy/lineup" className="block bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-sm px-5 py-3 rounded-lg text-center transition-colors border border-white/10">
                  View Lineup
                </Link>
                <Link href="/comedy/apply" className="block bg-gradient-to-r from-orange-500 to-red-600 text-white font-black uppercase tracking-widest text-sm px-5 py-3 rounded-lg text-center hover:opacity-90 transition-opacity">
                  Apply to Perform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

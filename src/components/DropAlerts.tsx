"use client";
import { useState } from "react";
import cities from "@/content/cities.json";

interface DropAlertsProps {
  variant?: "default" | "dark";
}

export default function DropAlerts({ variant = "default" }: DropAlertsProps) {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: connect to email platform
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-2xl font-black uppercase tracking-widest text-white">You&apos;re in.</p>
        <p className="text-white/60 mt-2">We&apos;ll hit you when tickets drop and lineups go live.</p>
      </div>
    );
  }

  const containerClass =
    variant === "dark"
      ? "rounded-2xl p-8 bg-black/40 border border-white/15"
      : "rounded-2xl p-8 bg-white/5 border border-white/10";

  return (
    <div className={containerClass}>
      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-center mb-2">
        Drop Alerts
      </h2>
      <p className="text-white/60 text-center mb-6 text-sm">
        Be first to know when tickets drop and lineups go live.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 text-sm"
        />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 text-sm min-w-[160px]"
        >
          <option value="">City (optional)</option>
          {(cities as string[]).map((c) => (
            <option key={c} value={c} className="bg-[#0a0a0a]">{c}</option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-white text-black font-black uppercase tracking-widest text-sm px-6 py-3 rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap"
        >
          Alert Me
        </button>
      </form>
    </div>
  );
}

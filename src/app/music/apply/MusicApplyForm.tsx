"use client";
import { useState } from "react";

export default function MusicApplyForm() {
  const [links, setLinks] = useState<string[]>(["", "", ""]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateLink(index: number, value: string) {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  }

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const required = [
      "artistName", "email", "phone", "city", "genre",
      "streaming", "instagram", "youtube", "whyPerform", "whatDifferent"
    ];
    for (const field of required) {
      if (!form.get(field)?.toString().trim()) {
        errs[field] = "This field is required.";
      }
    }
    const filledLinks = links.filter((l) => l.trim() !== "");
    if (filledLinks.length < 1) {
      errs.performanceLinks = "Please provide at least 1 live performance video link (no studio-only submissions).";
    }
    return errs;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // TODO: POST form payload to your backend endpoint (e.g. /api/apply/music) or a form service (e.g. Formspree); handle errors and show a user-facing error state
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <span className="text-6xl mb-6 block">🎵</span>
        <h2 className="text-4xl font-black uppercase tracking-widest mb-4">Application Received</h2>
        <p className="text-white/60 max-w-md mx-auto">
          Thanks for applying to NXTWAVE LIVE. We&apos;ll review your submission and reach out if you&apos;re a fit for an upcoming show.
        </p>
      </div>
    );
  }

  const err = (field: string) =>
    errors[field] ? <p className="text-red-400 text-xs mt-1">{errors[field]}</p> : null;

  const inputClass = (field: string) =>
    `w-full bg-white/10 border ${errors[field] ? "border-red-500/60" : "border-white/20"} rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 text-sm`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Basic Info */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Basic Info</h2>
        <div>
          <label className="block text-sm font-bold mb-1">Artist Name <span className="text-red-400">*</span></label>
          <input name="artistName" type="text" placeholder="Stage name" className={inputClass("artistName")} />
          {err("artistName")}
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Real Name <span className="text-white/30">(optional)</span></label>
          <input name="realName" type="text" placeholder="Your real name" className={inputClass("realName")} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-1">Email <span className="text-red-400">*</span></label>
            <input name="email" type="email" placeholder="you@example.com" className={inputClass("email")} />
            {err("email")}
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Phone <span className="text-red-400">*</span></label>
            <input name="phone" type="tel" placeholder="(555) 000-0000" className={inputClass("phone")} />
            {err("phone")}
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">City / Location <span className="text-red-400">*</span></label>
          <input name="city" type="text" placeholder="City, State" className={inputClass("city")} />
          {err("city")}
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Genre <span className="text-red-400">*</span></label>
          <input name="genre" type="text" placeholder="e.g. Hip-Hop, R&B, Afrobeats, Pop, etc." className={inputClass("genre")} />
          {err("genre")}
        </div>
      </div>

      {/* Links */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Links</h2>
        <div>
          <label className="block text-sm font-bold mb-1">Spotify / Apple Music <span className="text-red-400">*</span></label>
          <input name="streaming" type="url" placeholder="https://open.spotify.com/artist/..." className={inputClass("streaming")} />
          {err("streaming")}
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Instagram / TikTok <span className="text-red-400">*</span></label>
          <input name="instagram" type="text" placeholder="@yourhandle or profile URL" className={inputClass("instagram")} />
          {err("instagram")}
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">YouTube or Performance Page <span className="text-red-400">*</span></label>
          <input name="youtube" type="url" placeholder="https://youtube.com/..." className={inputClass("youtube")} />
          {err("youtube")}
        </div>
      </div>

      {/* Live Performance Proof */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Live Performance Proof</h2>
        <p className="text-white/50 text-xs">1–3 live performance video links. <strong className="text-white/70">No studio-only submissions.</strong></p>
        {links.map((link, i) => (
          <div key={i}>
            <label className="block text-sm font-bold mb-1">
              Performance Link {i + 1} {i === 0 && <span className="text-red-400">*</span>}
            </label>
            <input
              type="url"
              value={link}
              onChange={(e) => updateLink(i, e.target.value)}
              placeholder={`https:// (live performance video ${i + 1})`}
              className={`w-full bg-white/10 border ${errors.performanceLinks && i === 0 ? "border-red-500/60" : "border-white/20"} rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 text-sm`}
            />
          </div>
        ))}
        {err("performanceLinks")}
      </div>

      {/* Short Answers */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Short Answers</h2>
        <div>
          <label className="block text-sm font-bold mb-1">Why do you want to perform on NXTWAVE LIVE? <span className="text-red-400">*</span></label>
          <textarea name="whyPerform" rows={3} placeholder="Tell us..." className={`${inputClass("whyPerform")} resize-none`} />
          {err("whyPerform")}
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">What makes your live performance different? <span className="text-red-400">*</span></label>
          <textarea name="whatDifferent" rows={3} placeholder="Tell us..." className={`${inputClass("whatDifferent")} resize-none`} />
          {err("whatDifferent")}
        </div>
      </div>

      {/* Optional */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Optional</h2>
        <div>
          <label className="block text-sm font-bold mb-1">Estimated Local Draw <span className="text-white/30">(optional)</span></label>
          <input name="localDraw" type="text" placeholder="How many people can you bring?" className={inputClass("localDraw")} />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Current Release Status <span className="text-white/30">(optional)</span></label>
          <input name="releaseStatus" type="text" placeholder="Are you actively dropping music?" className={inputClass("releaseStatus")} />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-widest py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
      >
        Submit Application
      </button>
    </form>
  );
}

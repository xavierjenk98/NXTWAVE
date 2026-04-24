"use client";
import { useState } from "react";

export default function ComedyApplyForm() {
  const [clips, setClips] = useState<string[]>(["", "", ""]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateClip(index: number, value: string) {
    const newClips = [...clips];
    newClips[index] = value;
    setClips(newClips);
  }

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const required = [
      "comedianName", "email", "phone", "city", "style",
      "instagram", "youtube", "whyPerform", "crowdType"
    ];
    for (const field of required) {
      if (!form.get(field)?.toString().trim()) {
        errs[field] = "This field is required.";
      }
    }
    const filledClips = clips.filter((c) => c.trim() !== "");
    if (filledClips.length < 1) {
      errs.standupClips = "Please provide at least 1 stand-up set or live performance clip.";
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
    // TODO: submit to backend
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <span className="text-6xl mb-6 block">🎤</span>
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
          <label className="block text-sm font-bold mb-1">Comedian Name <span className="text-red-400">*</span></label>
          <input name="comedianName" type="text" placeholder="Stage name" className={inputClass("comedianName")} />
          {err("comedianName")}
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
          <label className="block text-sm font-bold mb-1">Style <span className="text-red-400">*</span></label>
          <input name="style" type="text" placeholder="e.g. Observational, Storytelling, Crowd Work, etc." className={inputClass("style")} />
          {err("style")}
        </div>
      </div>

      {/* Links */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Links</h2>
        <div>
          <label className="block text-sm font-bold mb-1">Instagram / TikTok <span className="text-red-400">*</span></label>
          <input name="instagram" type="text" placeholder="@yourhandle or profile URL" className={inputClass("instagram")} />
          {err("instagram")}
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">YouTube or Stand-Up Clips Page <span className="text-red-400">*</span></label>
          <input name="youtube" type="url" placeholder="https://youtube.com/..." className={inputClass("youtube")} />
          {err("youtube")}
        </div>
      </div>

      {/* Stand-Up Clips */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Stand-Up Sets / Live Performance Clips</h2>
        <p className="text-white/50 text-xs">1–3 links to stand-up sets or live performance clips.</p>
        {clips.map((clip, i) => (
          <div key={i}>
            <label className="block text-sm font-bold mb-1">
              Clip Link {i + 1} {i === 0 && <span className="text-red-400">*</span>}
            </label>
            <input
              type="url"
              value={clip}
              onChange={(e) => updateClip(i, e.target.value)}
              placeholder={`https:// (stand-up clip ${i + 1})`}
              className={`w-full bg-white/10 border ${errors.standupClips && i === 0 ? "border-red-500/60" : "border-white/20"} rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 text-sm`}
            />
          </div>
        ))}
        {err("standupClips")}
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
          <label className="block text-sm font-bold mb-1">What type of crowd do you perform best in front of? <span className="text-red-400">*</span></label>
          <textarea name="crowdType" rows={3} placeholder="Tell us..." className={`${inputClass("crowdType")} resize-none`} />
          {err("crowdType")}
        </div>
      </div>

      {/* Optional */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
        <h2 className="text-sm font-black uppercase tracking-widest text-white/60">Optional</h2>
        <div>
          <label className="block text-sm font-bold mb-1">Years Performing <span className="text-white/30">(optional)</span></label>
          <input name="yearsPerforming" type="text" placeholder="How long have you been doing stand-up?" className={inputClass("yearsPerforming")} />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Previous Clubs / Shows Performed At <span className="text-white/30">(optional)</span></label>
          <textarea name="previousShows" rows={2} placeholder="List any notable clubs or shows you've performed at..." className={`${inputClass("previousShows")} resize-none`} />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-black uppercase tracking-widest py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
      >
        Submit Application
      </button>
    </form>
  );
}

export const metadata = { title: "Privacy Policy — NXTWAVE LIVE" };

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-black uppercase tracking-widest mb-8">Privacy Policy</h1>
      <div className="space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        <p>NXTWAVE LIVE (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information about you when you use our website.</p>
        <h2 className="text-white font-black uppercase tracking-widest text-lg pt-4">Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you sign up for drop alerts or submit an application. This may include your name, email address, phone number, city, and social media handles.</p>
        <h2 className="text-white font-black uppercase tracking-widest text-lg pt-4">How We Use Your Information</h2>
        <p>We use the information we collect to operate and improve our services, send you updates about ticket drops and lineups, and review artist/comedian applications.</p>
        <h2 className="text-white font-black uppercase tracking-widest text-lg pt-4">Contact</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@nxtwavelive.com" className="text-purple-400 hover:text-purple-300">hello@nxtwavelive.com</a>.</p>
        <p className="pt-4 text-white/40 text-xs">This is a stub page. Full policy to be added before launch.</p>
      </div>
    </div>
  );
}

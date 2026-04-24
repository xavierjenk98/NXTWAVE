export const metadata = { title: "Terms of Service — NXTWAVE LIVE" };

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-black uppercase tracking-widest mb-8">Terms of Service</h1>
      <div className="space-y-4 text-white/70 text-sm leading-relaxed">
        <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        <p>By accessing or using the NXTWAVE LIVE website, you agree to be bound by these Terms of Service.</p>
        <h2 className="text-white font-black uppercase tracking-widest text-lg pt-4">Use of the Site</h2>
        <p>You may use this site for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair the site or interfere with any other party&apos;s use of the site.</p>
        <h2 className="text-white font-black uppercase tracking-widest text-lg pt-4">Applications</h2>
        <p>Submitting an artist or comedian application does not guarantee a performance slot. NXTWAVE LIVE reserves the right to accept or reject applications at its sole discretion.</p>
        <h2 className="text-white font-black uppercase tracking-widest text-lg pt-4">Intellectual Property</h2>
        <p>All content on this site, including text, graphics, and logos, is the property of NXTWAVE LIVE and is protected by applicable intellectual property laws.</p>
        <h2 className="text-white font-black uppercase tracking-widest text-lg pt-4">Contact</h2>
        <p>Questions about these Terms? Contact us at <a href="mailto:hello@nxtwavelive.com" className="text-purple-400 hover:text-purple-300">hello@nxtwavelive.com</a>.</p>
        <p className="pt-4 text-white/40 text-xs">This is a stub page. Full terms to be added before launch.</p>
      </div>
    </div>
  );
}

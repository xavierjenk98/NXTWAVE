import LaneNav from "@/components/LaneNav";
import ComedyApplyForm from "./ComedyApplyForm";

export const metadata = { title: "Comedian Application — NXTWAVE LIVE" };

export default function ComedyApplyPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">Comedy Shows</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-4">Comedian Application</h1>
          <p className="text-white/60">Apply to perform on NXTWAVE LIVE. US-based comedians only.</p>
        </div>
        <div className="mb-10">
          <LaneNav lane="comedy" />
        </div>
        <ComedyApplyForm />
      </div>
    </div>
  );
}

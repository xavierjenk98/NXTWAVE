import LaneNav from "@/components/LaneNav";
import DropAlerts from "@/components/DropAlerts";
import eventsData from "@/content/events-comedy.json";

export const metadata = { title: "Comedy Tickets — NXTWAVE LIVE" };

type Event = {
  id: string;
  city: string;
  date: string;
  venue: string;
  ticketUrl: string | null;
};

function DropAlertsInline() {
  return (
    <span className="shrink-0 border border-orange-500/50 text-orange-400 font-black uppercase tracking-widest text-sm px-6 py-3 rounded-lg text-center cursor-default">
      Get Drop Alerts ↓
    </span>
  );
}

export default function ComedyTicketsPage() {
  const events = eventsData as Event[];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">Comedy Shows</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-4">Tickets</h1>
        </div>

        <div className="mb-10">
          <LaneNav lane="comedy" />
        </div>

        <div className="space-y-4 mb-12">
          {events.map((event) => (
            <div key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-6 hover:border-orange-500/30 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <p className="font-black text-lg text-white">{event.city}</p>
                  <p className="text-white/50 text-sm">{event.date}</p>
                </div>
                {event.venue !== "TBA" ? (
                  <>
                    <span className="hidden sm:block text-white/20">·</span>
                    <p className="text-white/70 text-sm">{event.venue}</p>
                  </>
                ) : (
                  <span className="text-white/30 text-sm">Venue TBA</span>
                )}
              </div>
              {event.ticketUrl ? (
                <a
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-white text-black font-black uppercase tracking-widest text-sm px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-center"
                >
                  Get Tickets
                </a>
              ) : (
                <DropAlertsInline />
              )}
            </div>
          ))}
        </div>

        <DropAlerts />
      </div>
    </div>
  );
}

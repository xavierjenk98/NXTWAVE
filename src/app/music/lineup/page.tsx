import LaneNav from "@/components/LaneNav";
import DropAlerts from "@/components/DropAlerts";
import lineupData from "@/content/lineup-music.json";

export const metadata = { title: "Music Lineup — NXTWAVE LIVE" };

type LineupArtist = {
  name: string;
  city: string;
  genre?: string;
  image?: string | null;
};

export default function MusicLineupPage() {
  const lineup = lineupData as LineupArtist[];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">Music Shows</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-4">Lineup</h1>
        </div>

        <div className="mb-10">
          <LaneNav lane="music" />
        </div>

        {lineup.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {lineup.map((artist, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-purple-800/50 to-blue-900/50 flex items-center justify-center">
                  {artist.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl">🎵</span>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-black text-white">{artist.name}</p>
                  <p className="text-white/50 text-sm">{artist.city}</p>
                  {artist.genre && <p className="text-purple-400 text-xs mt-1 font-bold uppercase tracking-widest">{artist.genre}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-16 text-center mb-12">
            <span className="text-6xl block mb-6">🎵</span>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-3">Lineup Dropping Soon</h2>
            <p className="text-white/50 max-w-sm mx-auto">
              Artists are being confirmed. Sign up below to be first to know when the lineup drops.
            </p>
          </div>
        )}

        <DropAlerts />
      </div>
    </div>
  );
}

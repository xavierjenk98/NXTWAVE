"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  lane: "music" | "comedy";
}

export default function LaneNav({ lane }: Props) {
  const pathname = usePathname();
  const base = `/${lane}`;
  const color = lane === "music" ? "from-purple-600 to-blue-600" : "from-orange-500 to-red-600";

  const links = [
    { label: "Overview", href: base },
    { label: "Tickets", href: `${base}/tickets` },
    { label: "Lineup", href: `${base}/lineup` },
    { label: "Apply", href: `${base}/apply` },
  ];

  return (
    <div className="flex gap-1 flex-wrap">
      {links.map((l) => {
        const active = pathname === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-all ${
              active
                ? `bg-gradient-to-r ${color} text-white`
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}

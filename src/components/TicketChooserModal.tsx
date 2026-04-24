"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function TicketChooserModal({ isOpen, onClose }: Props) {
  const router = useRouter();

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function go(path: string) {
    onClose();
    router.push(path);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111] border border-white/15 rounded-2xl p-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 text-center">Get Tickets For</p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => go("/music/tickets")}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black uppercase tracking-widest py-4 px-6 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            Music Shows
          </button>
          <button
            onClick={() => go("/comedy/tickets")}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-black uppercase tracking-widest py-4 px-6 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            Comedy Shows
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full text-white/40 text-sm hover:text-white/70 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

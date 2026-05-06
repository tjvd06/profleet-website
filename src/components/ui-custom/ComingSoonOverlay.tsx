import { Sparkles } from "lucide-react";

export function ComingSoonOverlay() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/80 backdrop-blur-md px-4">
      <div className="max-w-md w-full rounded-3xl bg-white border border-slate-200 shadow-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20">
          <Sparkles size={32} />
        </div>
        <h2 className="text-3xl font-bold text-navy-950 mb-3 tracking-tight">Bald verfügbar</h2>
        <p className="text-slate-600 text-base leading-relaxed">
          Wir arbeiten gerade an dieser Funktion. Schau bald wieder vorbei.
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={32} className="rounded-lg" />
            <span className="text-xl font-black tracking-tight text-navy-700">proFleet</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-500 transition-colors">Startseite</Link>
            <Link href="/so-funktionierts" className="hover:text-blue-500 transition-colors">So funktioniert's</Link>
            <Link href="/fuer-haendler" className="hover:text-blue-500 transition-colors">Für Händler</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`${APP_URL}/anmelden`}
            className="text-sm font-medium text-slate-600 hover:text-navy-950 transition-colors"
          >
            Anmelden
          </a>
          <a
            href={`${APP_URL}/registrieren`}
            className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Vorregistrieren
          </a>
        </div>
      </div>
    </header>
  );
}

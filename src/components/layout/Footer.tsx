import Link from 'next/link';
import Image from 'next/image';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 py-16 text-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/icon-light.svg" alt="proFleet Logo" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-bold tracking-tight text-white">proFleet</span>
            </div>
            <p className="mb-4">Die moderne Ausschreibungsplattform für Unternehmen. Fahrzeuge beschaffen wie die Großen.</p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Plattform</h3>
            <ul className="space-y-3">
              <li><Link href="/so-funktionierts" className="hover:text-white transition-colors">Für Unternehmen</Link></li>
              <li><Link href="/fuer-haendler" className="hover:text-white transition-colors">Für Händler</Link></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition-colors">AGB</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie-Einstellungen</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 proFleet GmbH. Alle Rechte vorbehalten.</p>
          <a href={`${APP_URL}/anmelden`} className="text-slate-500 hover:text-slate-300 transition-colors text-xs">
            Anmelden
          </a>
        </div>
      </div>
    </footer>
  );
}

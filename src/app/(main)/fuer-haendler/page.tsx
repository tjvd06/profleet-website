"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Globe, Star, ArrowRight, ShieldCheck, Zap,
  Target, BarChart3, UserPlus, Send, MessageCircle, Award,
} from "lucide-react";
import Link from "next/link";
import { HeroSection } from "@/components/ui-custom/HeroSection";
import { APP_URL } from "@/lib/site";

export default function ForDealersLandingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* 1. HERO SECTION */}
      <HeroSection
        title={<>Mehr Reichweite. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Null Risiko für Sie.</span></>}
        subtitle="proFleet verbindet deutsche Vertragshändler mit einem gigantischen Netzwerk an B2B-Flottenmanagern und KMUs, die konkret nach Fahrzeugen suchen."
      >
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
          <Link href={`${APP_URL}/registrieren`}>
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white font-semibold px-8 h-14 text-lg shadow-lg shadow-blue-500/20">
              Als Anbieter vorregistrieren <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>

      </HeroSection>

      {/* 2. ADVANTAGES FEATURE GRID */}
      <section className="py-24 container mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-4">Warum proFleet?</h2>
          <p className="text-lg text-slate-500">Ihre Vertriebskanäle in den B2B Markt, ohne kaltes Telefonieren.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <Globe size={24} />
            </div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">Bundesweite Reichweite</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Erhalten Sie Ausschreibungen von Unternehmen aus dem gesamten Bundesgebiet, ohne vor Ort präsent sein zu müssen.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">Flexibles Modell</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Wir entwickeln das Preismodell gemeinsam mit Pilotpartnern. Faire, transparente Konditionen ohne Lock-In.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">Einfache Angebotserstellung</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dank standardisierter Formulare erstellen Sie Bestpreis-Angebote oder inserieren Tageszulassungen in unter 2 Minuten.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <Star size={24} />
            </div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">Faires Bewertungssystem</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Punkten Sie durch Leistung. Zeigen Sie Käufern durch Ihren 5-Sterne-Score, dass Sie ein exzellenter und verlässlicher Partner sind.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <Target size={24} />
            </div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">Qualifizierte Anfragen</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Käufer beschreiben ihren konkreten Bedarf inklusive Konfiguration und Zeitrahmen — kein Tire-Kicking, sondern echte Kaufabsicht.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-lg font-semibold text-navy-950 mb-2">Volle Transparenz</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sehen Sie, welche Mitbewerber bieten und zu welchen Konditionen. Treffen Sie fundierte Preisentscheidungen statt im Blindflug zu kalkulieren.
            </p>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-4">So einfach läuft's</h2>
            <p className="text-lg text-slate-500">Vom Profil-Setup bis zum Vertragsabschluss in vier Schritten.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, icon: UserPlus, title: "Profil anlegen", desc: "Verifizierung mit Handelsregister-Auszug, Logo hochladen, los geht's. Ohne Kreditkarte." },
              { num: 2, icon: Send, title: "Bieten oder inserieren", desc: "Auf passende Ausschreibungen reagieren oder eigene Sofort-Angebote für Tageszulassungen einstellen." },
              { num: 3, icon: MessageCircle, title: "Direkt kommunizieren", desc: "Bei Interesse erhalten Sie volle Käuferdaten und können Konditionen direkt abstimmen." },
              { num: 4, icon: Award, title: "Abschließen & wachsen", desc: "Vertrag schließen, Bewertung sammeln, Reputation aufbauen — höhere Sichtbarkeit für künftige Anfragen." },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative bg-slate-50/50 rounded-2xl p-8 border border-slate-200">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sm font-mono font-semibold text-blue-600 tracking-wider">0{step.num}</span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-950 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 5. BOTTOM CTA */}
      <section className="bg-navy-950 text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-blue-600/30 blur-[120px] pointer-events-none rounded-full" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Starten Sie jetzt durch.</h2>
          <p className="text-lg text-blue-100/80 mb-10 max-w-2xl mx-auto">
            Registrieren Sie Ihr Autohaus in 3 Minuten und stellen Sie sofort Ihre ersten Angebote ein.
          </p>
          <Link href={`${APP_URL}/registrieren`}>
            <Button size="lg" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 hover:opacity-90 text-white font-semibold px-8 h-14 text-lg shadow-lg shadow-blue-500/20">
              Jetzt vorregistrieren <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs uppercase tracking-widest ${className || ''}`}>
      {children}
    </span>
  );
}

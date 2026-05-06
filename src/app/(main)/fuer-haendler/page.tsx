"use client";

import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Building2, Globe, TrendingUp, Handshake, Star,
  MapPin, CheckCircle2, ArrowRight, ShieldCheck, Zap,
  Target, BarChart3, UserPlus, Send, MessageCircle, Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/ui-custom/HeroSection";

export default function ForDealersLandingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <HeroSection
        badge="Der B2B Leasing Marktplatz"
        badgeIcon={<Building2 size={14} />}
        title={<>Mehr Reichweite. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Null Risiko für Sie.</span></>}
        subtitle="proFleet verbindet deutsche Vertragshändler mit einem gigantischen Netzwerk an B2B-Flottenmanagern und KMUs, die konkret nach Fahrzeugen suchen."
      >
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
          <Button size="lg" className="bg-white text-navy-950 hover:bg-slate-100 font-black h-14 px-8 rounded-2xl shadow-xl shadow-black/20">
            Als Anbieter vorregistrieren
          </Button>
        </div>

      </HeroSection>

      {/* 2. ADVANTAGES FEATURE GRID */}
      <section className="py-24 container mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mb-4">Warum proFleet?</h2>
          <p className="text-lg text-slate-500 font-medium">Ihre Vertriebskanäle in den B2B Markt, ohne kaltes Telefonieren.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-8 rounded-3xl border-transparent bg-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-3">Bundesweite Reichweite</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Erhalten Sie Ausschreibungen von Unternehmen aus dem gesamten Bundesgebiet, ohne vor Ort präsent sein zu müssen.
            </p>
          </Card>

          <Card className="p-8 rounded-3xl border-transparent bg-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-3">Flexibles Modell</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Wir entwickeln das Preismodell gemeinsam mit Pilotpartnern. Faire, transparente Konditionen ohne Lock-In.
            </p>
          </Card>

          <Card className="p-8 rounded-3xl border-transparent bg-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-3">Einfache Angebotserstellung</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Dank standardisierter Formulare erstellen Sie Bestpreis-Angebote oder inserieren Tageszulassungen in unter 2 Minuten.
            </p>
          </Card>

          <Card className="p-8 rounded-3xl border-transparent bg-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-3">Faires Bewertungssystem</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Punkten Sie durch Leistung. Zeigen Sie Käufern durch Ihren 5-Sterne-Score, dass Sie ein exzellenter und verlässlicher Partner sind.
            </p>
          </Card>

          <Card className="p-8 rounded-3xl border-transparent bg-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-3">Qualifizierte Anfragen</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Käufer beschreiben ihren konkreten Bedarf inklusive Konfiguration und Zeitrahmen — kein Tire-Kicking, sondern echte Kaufabsicht.
            </p>
          </Card>

          <Card className="p-8 rounded-3xl border-transparent bg-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-3">Volle Transparenz</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Sehen Sie, welche Mitbewerber bieten und zu welchen Konditionen. Treffen Sie fundierte Preisentscheidungen statt im Blindflug zu kalkulieren.
            </p>
          </Card>

          <Card className="p-8 rounded-3xl border-transparent bg-white shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
              <Handshake size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-950 mb-3">Direkter Käuferkontakt</h3>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Sobald Ihr Angebot überzeugt, sehen Sie alle Kontaktdaten des Käufers — keine anonyme Vermittlungsschicht, kein Gatekeeper dazwischen.
            </p>
          </Card>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-navy-950 mb-4">So einfach läuft's</h2>
            <p className="text-lg text-slate-500 font-medium">Vom Profil-Setup bis zum Vertragsabschluss in vier Schritten.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center font-black shadow-lg shadow-blue-500/30">1</div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 mt-2">
                <UserPlus size={26} />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Profil anlegen</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Verifizierung mit Handelsregister-Auszug, Logo hochladen, los geht's. Ohne Kreditkarte.</p>
            </div>

            <div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center font-black shadow-lg shadow-blue-500/30">2</div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 mt-2">
                <Send size={26} />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Bieten oder inserieren</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Auf passende Ausschreibungen reagieren oder eigene Sofort-Angebote für Tageszulassungen einstellen.</p>
            </div>

            <div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center font-black shadow-lg shadow-blue-500/30">3</div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 mt-2">
                <MessageCircle size={26} />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Direkt kommunizieren</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Bei Interesse erhalten Sie volle Käuferdaten und können Konditionen direkt abstimmen.</p>
            </div>

            <div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center font-black shadow-lg shadow-blue-500/30">4</div>
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 mt-2">
                <Award size={26} />
              </div>
              <h3 className="text-lg font-bold text-navy-950 mb-2">Abschließen & wachsen</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Vertrag schließen, Bewertung sammeln, Reputation aufbauen — höhere Sichtbarkeit für künftige Anfragen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-24 container mx-auto max-w-3xl px-4 md:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-slate-200 text-slate-600 border-none font-bold mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-5xl font-black text-navy-950 mb-4">Noch Fragen?</h2>
        </div>

        <Accordion className="w-full bg-white rounded-3xl border border-slate-200 p-2 shadow-sm">
          <AccordionItem value="item-1" className="border-b-0 px-4">
            <AccordionTrigger className="text-lg font-bold text-navy-950 hover:no-underline py-6">Was kostet die Nutzung?</AccordionTrigger>
            <AccordionContent className="text-slate-500 font-medium text-base leading-relaxed pb-6">
              Das endgültige Preismodell legen wir gemeinsam mit unseren Pilotpartnern fest und kommunizieren es vor dem Launch. Wer sich jetzt vorregistriert, profitiert von attraktiven Early-Access-Konditionen.
            </AccordionContent>
          </AccordionItem>
          <div className="h-px bg-slate-100 mx-4" />
          <AccordionItem value="item-3" className="border-b-0 px-4">
            <AccordionTrigger className="text-lg font-bold text-navy-950 hover:no-underline py-6">Sind die Anfragen geprüft?</AccordionTrigger>
            <AccordionContent className="text-slate-500 font-medium text-base leading-relaxed pb-6">
              Absolut. Alle einkaufenden Unternehmen müssen sich verifizieren lassen (Handelsregister etc.), bevor sie Ausschreibungen starten können. Wir sperren zudem Käufer rigoros, die nach aufgedeckten Kontaktdaten den Vertragsabschluss systematisch verweigern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="bg-navy-950 text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-blue-600/30 blur-[120px] pointer-events-none rounded-full" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Starten Sie jetzt durch.</h2>
          <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto">
            Registrieren Sie Ihr Autohaus in 3 Minuten und stellen Sie sofort Ihre ersten Angebote ein.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-black h-16 px-12 rounded-2xl shadow-xl shadow-blue-500/20 text-lg">
            Jetzt vorregistrieren
          </Button>
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

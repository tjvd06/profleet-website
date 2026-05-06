"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

const NAV_ITEMS = [
  { href: "/", label: "Startseite" },
  { href: "/so-funktionierts", label: "So funktioniert's" },
  { href: "/fuer-haendler", label: "Für Händler" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <Logo size={32} className="rounded-lg" />
              <span className="text-xl font-black tracking-tight text-navy-700">proFleet</span>
            </Link>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-blue-500 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${APP_URL}/registrieren`}
              className="hidden md:inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            >
              Vorregistrieren
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 md:hidden bg-white transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav className="container mx-auto max-w-7xl flex flex-col gap-1 p-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-4 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`${APP_URL}/registrieren`}
            className="mt-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-4 text-base font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            Vorregistrieren
          </a>
        </nav>
      </div>
    </>
  );
}

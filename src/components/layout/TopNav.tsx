"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandMark } from "@/components/ui-custom/BrandMark";
import { ThemeToggle } from "@/components/ui-custom/ThemeToggle";
import { LanguageToggle } from "@/components/ui-custom/LanguageToggle";
import { useLang } from "@/components/providers/language-provider";
import { APP_URL } from "@/lib/site";

export function TopNav() {
  const { t } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/so-funktionierts", label: t.nav.how },
    { href: "/fuer-haendler", label: t.nav.dealers },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[padding] duration-500 ${
        scrolled ? "py-2" : "py-3.5"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div className="pf-container relative">
        <div
          className={`mx-auto flex items-center justify-between gap-4 rounded-full glass-strong px-4 py-2 transition-all duration-500 ${
            scrolled
              ? "shadow-[0_12px_40px_-12px_oklch(0.18_0.025_255_/_0.18),0_0_0_1px_var(--glass-border)] dark:shadow-[0_12px_40px_-8px_oklch(0_0_0_/_0.6),0_0_0_1px_var(--glass-border)]"
              : ""
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 text-[17px] font-semibold tracking-[-0.01em] text-fg"
          >
            <BrandMark size={32} />
            <span className="font-display">proFleet</span>
          </Link>

          <nav className="hidden gap-7 text-[14.5px] font-[450] text-fg-soft md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${isActive(l.href) ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              href={`${APP_URL}/registrieren`}
              className="cta cta-primary hidden md:inline-flex"
            >
              {t.nav.register}
              <span className="cta-arrow">
                <ArrowRight size={14} />
              </span>
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Menu schließen" : "Menu öffnen"}
              onClick={() => setMobileOpen((p) => !p)}
              className="grid h-[38px] w-[38px] place-items-center rounded-full border border-line bg-white/40 text-fg-soft transition-all duration-300 hover:-translate-y-px hover:border-line-strong hover:text-fg dark:bg-white/[0.04] md:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          className={`absolute left-7 right-7 top-full mt-2 rounded-pf-lg p-3 glass-strong transition-all duration-300 md:hidden ${
            mobileOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-xl px-4 py-3.5 font-medium transition-colors hover:bg-white/40 dark:hover:bg-white/[0.05] ${
                isActive(l.href) ? "text-fg" : "text-fg-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={`${APP_URL}/registrieren`}
            onClick={() => setMobileOpen(false)}
            className="cta cta-primary mt-2 w-full justify-center"
          >
            {t.nav.register}
            <span className="cta-arrow">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

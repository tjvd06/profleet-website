"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui-custom/Reveal";
import { HeroFloatCarousel } from "@/components/ui-custom/HeroFloatCarousel";
import { APP_URL } from "@/lib/site";

export function MarketingHero() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-mesh-wrap" aria-hidden="true">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="mesh-grid" />
      </div>

      <div className="hero-inner">
        <Reveal>
          <Link href="#launch" className="chip">
            <span className="chip-dot" aria-hidden="true" />
            <span>{t.hero.badge}</span>
            <span className="text-fg-mute transition-transform group-hover:translate-x-0.5">
              <ArrowRight size={12} />
            </span>
          </Link>
        </Reveal>

        <Reveal as="h1" className="hero-title" delay={80}>
          <span className="hero-line">{t.hero.title[0]}</span>
          <span className="hero-line hero-line-accent">{t.hero.title[1]}</span>
        </Reveal>

        <Reveal as="p" className="hero-sub" delay={160}>
          {t.hero.subtitle}
        </Reveal>

        <Reveal className="hero-ctas" delay={240}>
          <Link href={`${APP_URL}/registrieren`} className="cta cta-primary cta-lg">
            {t.hero.cta}
            <span className="cta-arrow">
              <ArrowRight size={16} />
            </span>
          </Link>
          <Link href="/so-funktionierts" className="cta cta-ghost cta-lg">
            {t.hero.ctaSecondary}
          </Link>
        </Reveal>

        <Reveal className="hero-stats" delay={360}>
          {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s, i) => (
            <div key={i} className="hero-stat glass">
              <div className="hero-stat-check">
                <Check size={16} />
              </div>
              <div>
                <div className="hero-stat-top">{s[0]}</div>
                <div className="hero-stat-bot">{s[1]}</div>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="hero-floater" delay={500}>
          <HeroFloatCarousel />
        </Reveal>
      </div>

      <div className="hero-scrim" aria-hidden="true" />
    </section>
  );
}

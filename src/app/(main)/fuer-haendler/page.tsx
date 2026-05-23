"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Gavel, Globe, Shield, Star, Zap } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui-custom/Reveal";
import { APP_URL } from "@/lib/site";

export default function ForDealersPage() {
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

  const advantageIcons = [
    <Globe size={22} key="g" />,
    <Shield size={22} key="s" />,
    <Zap size={22} key="z" />,
    <Star size={22} key="st" />,
    <Gavel size={22} key="ga" />,
    <BarChart3 size={22} key="b" />,
  ];

  return (
    <>
      <section className="hero hero-dealers" ref={heroRef}>
        <div className="hero-mesh-wrap" aria-hidden="true">
          <div className="mesh-blob mesh-blob-1" />
          <div className="mesh-blob mesh-blob-2" />
          <div className="mesh-blob mesh-blob-3" />
          <div className="mesh-grid" />
        </div>
        <div className="hero-inner">
          <Reveal as="h1" className="hero-title">
            <span className="hero-line">{t.dealers.heroTitle[0]}</span>
            <span className="hero-line hero-line-accent">{t.dealers.heroTitle[1]}</span>
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={100}>
            {t.dealers.heroSub}
          </Reveal>
          <Reveal className="hero-ctas" delay={180}>
            <Link href={`${APP_URL}/registrieren`} className="cta cta-primary cta-lg">
              {t.dealers.heroCta}
              <span className="cta-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>
        </div>
        <div className="hero-scrim" aria-hidden="true" />
      </section>

      <section className="pf-section">
        <div className="pf-container">
          <div className="center-head">
            <Reveal as="h2" className="section-title">
              {t.dealers.whyTitle}
            </Reveal>
            <Reveal as="p" className="section-sub" delay={80}>
              {t.dealers.whySub}
            </Reveal>
          </div>

          <div className="adv-grid">
            {t.dealers.advantages.map(([title, desc], i) => (
              <Reveal key={i} delay={100 + i * 50}>
                <div className={`adv-card glass adv-tint-${i % 3}`}>
                  <div className="adv-icon">{advantageIcons[i]}</div>
                  <h3 className="adv-title">{title}</h3>
                  <p className="adv-desc">{desc}</p>
                  <div className="adv-spark" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pf-section pf-section-dim">
        <div className="pf-container">
          <div className="center-head">
            <Reveal as="h2" className="section-title">
              {t.dealers.flowTitle}
            </Reveal>
            <Reveal as="p" className="section-sub" delay={80}>
              {t.dealers.flowSub}
            </Reveal>
          </div>

          <div className="flow-grid flow-grid-4">
            {t.dealers.flowSteps.map(([title, desc], i) => (
              <Reveal key={i} delay={100 + i * 70}>
                <div className="flow-card glass">
                  <div className="flow-num">0{i + 1}</div>
                  <h4 className="flow-title">{title}</h4>
                  <p className="flow-desc">{desc}</p>
                  <div className="flow-spark" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="launch-section dealers-cta">
        <div className="launch-bg" aria-hidden="true">
          <div className="launch-blob lb1" />
          <div className="launch-blob lb2" />
        </div>
        <div className="pf-container launch-inner">
          <Reveal as="h2" className="launch-title">
            {t.dealers.ctaTitle}
          </Reveal>
          <Reveal as="p" className="launch-desc" delay={80}>
            {t.dealers.ctaSub}
          </Reveal>
          <Reveal delay={160}>
            <Link
              href={`${APP_URL}/registrieren`}
              className="cta cta-primary cta-lg cta-on-dark"
            >
              {t.dealers.ctaButton}
              <span className="cta-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

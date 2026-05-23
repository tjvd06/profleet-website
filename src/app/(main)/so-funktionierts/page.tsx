"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Zap } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui-custom/Reveal";
import { APP_URL } from "@/lib/site";

type Tab = "buyer" | "dealer";

export default function HowItWorksPage() {
  const { t } = useLang();
  const [tab, setTab] = useState<Tab>("buyer");
  const steps = tab === "buyer" ? t.how.buyer : t.how.dealer;
  const accent = tab === "buyer" ? "accent-blue" : "accent-navy";

  return (
    <>
      <section className="hero hero-page">
        <div className="hero-mesh-wrap" aria-hidden="true">
          <div className="mesh-blob mesh-blob-1" />
          <div className="mesh-blob mesh-blob-2" />
          <div className="mesh-grid" />
        </div>
        <div className="hero-inner">
          <Reveal as="h1" className="hero-title hero-title-page">
            <span className="hero-line">{t.how.heroTitle[0]}</span>
          </Reveal>
          <Reveal as="p" className="hero-sub" delay={100}>
            {t.how.heroSub}
          </Reveal>
        </div>
        <div className="hero-scrim" aria-hidden="true" />
      </section>

      <section className="pf-section section-tabs">
        <div className="pf-container">
          <div className="tabs-wrap">
            <div className="tabs glass">
              <span
                className="tabs-pill"
                aria-hidden="true"
                style={{ transform: tab === "dealer" ? "translateX(100%)" : "none" }}
              />
              <button
                type="button"
                className={`tab ${tab === "buyer" ? "on" : ""}`}
                onClick={() => setTab("buyer")}
              >
                {t.how.tabBuyer}
              </button>
              <button
                type="button"
                className={`tab ${tab === "dealer" ? "on" : ""}`}
                onClick={() => setTab("dealer")}
              >
                {t.how.tabDealer}
              </button>
            </div>
          </div>

          <div className={`timeline ${accent}`}>
            <div className="timeline-line" aria-hidden="true" />
            {steps.map((s, i) => (
              <div key={`${tab}-${i}`} className={`tl-step ${i % 2 === 0 ? "" : "right"}`}>
                <div className="tl-node">{String(i + 1).padStart(2, "0")}</div>
                <div className="tl-card glass">
                  <div className="tl-num">Step {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="tl-title">{s.t}</h3>
                  <p className="tl-desc">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="instant-card-wrap">
            <div
              className={`instant-card glass-strong ${
                tab === "dealer" ? "tinted-dark" : "tinted-blue"
              }`}
            >
              <div className="ic-tag">
                <Zap size={12} />
                {tab === "buyer" ? t.how.instant.tagBuyer : t.how.instant.tagDealer}
              </div>
              <h3 className="ic-title">
                {tab === "buyer" ? t.how.instant.titleBuyer : t.how.instant.titleDealer}
              </h3>
              <p className="ic-desc">
                {tab === "buyer" ? t.how.instant.descBuyer : t.how.instant.descDealer}
              </p>
              <ul className="ic-bullets">
                {(tab === "buyer"
                  ? t.how.instant.bulletsBuyer
                  : t.how.instant.bulletsDealer
                ).map((b, i) => (
                  <li key={i}>
                    <span className="ic-check">
                      <Check size={12} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
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
            {t.how.closingTitle}
          </Reveal>
          <Reveal as="p" className="launch-desc" delay={80}>
            {t.how.closingSub}
          </Reveal>
          <Reveal delay={160}>
            <div className="how-cta-row">
              <Link
                href={`${APP_URL}/registrieren`}
                className="cta cta-primary cta-lg cta-on-dark"
              >
                {t.nav.register}
                <span className="cta-arrow">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link href="/fuer-haendler" className="cta cta-ghost cta-lg cta-on-dark">
                {t.nav.dealers}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

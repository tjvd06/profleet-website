"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui-custom/Reveal";
import { APP_URL } from "@/lib/site";

const TARGET = new Date("2026-09-22T10:00:00Z").getTime();

export function LaunchCountdown() {
  const { t } = useLang();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, TARGET - (now ?? TARGET));
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const mins = Math.floor((diff / 60_000) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  const units = [
    { v: days, l: t.launch.units.days },
    { v: hours, l: t.launch.units.hours },
    { v: mins, l: t.launch.units.mins },
    { v: secs, l: t.launch.units.secs },
  ];

  return (
    <section id="launch" className="launch-section">
      <div className="launch-bg" aria-hidden="true">
        <div className="launch-blob lb1" />
        <div className="launch-blob lb2" />
      </div>
      <div className="pf-container launch-inner">
        <Reveal className="chip chip-on-dark">
          <span className="chip-dot" />
          {t.launch.tag}
        </Reveal>
        <Reveal as="h2" className="launch-title" delay={80}>
          {t.launch.title[0]} <span className="launch-accent">{t.launch.title[1]}</span>
        </Reveal>
        <Reveal as="p" className="launch-desc" delay={140}>
          {t.launch.desc}
        </Reveal>

        <Reveal delay={220}>
          <div className="countdown">
            <div className="cd-label">{t.launch.counter}</div>
            <div className="cd-grid">
              {units.map((u, i) => (
                <div key={i} className="cd-unit">
                  <div className="cd-num">
                    {now === null ? "--" : String(u.v).padStart(2, "0")}
                  </div>
                  <div className="cd-lbl">{u.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <Link
            href={`${APP_URL}/registrieren`}
            className="cta cta-primary cta-lg cta-on-dark"
          >
            {t.launch.cta}
            <span className="cta-arrow">
              <ArrowRight size={16} />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

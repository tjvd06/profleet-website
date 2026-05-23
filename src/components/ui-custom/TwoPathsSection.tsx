"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Gavel, Zap } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui-custom/Reveal";
import { APP_URL } from "@/lib/site";

export function TwoPathsSection() {
  const { t } = useLang();
  const paths = [
    { ...t.paths.auction, icon: <Gavel size={26} />, tint: "tinted-blue" as const },
    { ...t.paths.instant, icon: <Zap size={26} />, tint: "tinted-teal" as const },
  ];

  return (
    <section id="paths" className="pf-section">
      <div className="pf-container">
        <Reveal className="eyebrow">{t.paths.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title" delay={80}>
          {t.paths.title}
        </Reveal>
        <Reveal as="p" className="section-sub" delay={140}>
          {t.paths.subtitle}
        </Reveal>

        <div className="paths-grid">
          {paths.map((p, i) => (
            <Reveal key={i} delay={200 + i * 100}>
              <div className={`path-card glass ${p.tint}`}>
                <div className="path-head">
                  <span className="pc-tag">{p.tag}</span>
                  <span className="pc-num">0{i + 1}</span>
                </div>
                <div className="pc-icon">{p.icon}</div>
                <h3 className="pc-title">{p.title}</h3>
                <p className="pc-desc">{p.desc}</p>
                <ul className="pc-bullets">
                  {p.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="pc-bullet-icon">
                        <Check size={14} />
                      </span>
                      <div>
                        <div className="pc-bullet-t">{b[0]}</div>
                        <div className="pc-bullet-d">{b[1]}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href={`${APP_URL}/registrieren`} className="pc-cta">
                  {p.cta}
                  <span className="pc-cta-arrow">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

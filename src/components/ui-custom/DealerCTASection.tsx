"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui-custom/Reveal";
import { APP_URL } from "@/lib/site";

export function DealerCTASection() {
  const { t } = useLang();
  return (
    <section id="dealer" className="pf-section">
      <div className="pf-container">
        <div className="dealer-card glass">
          <div>
            <Reveal className="eyebrow">{t.dealer.eyebrow}</Reveal>
            <Reveal as="h2" className="dealer-title" delay={80}>
              {t.dealer.title}
            </Reveal>
            <Reveal as="p" className="dealer-desc" delay={140}>
              {t.dealer.desc}
            </Reveal>
            <Reveal delay={200}>
              <div className="mb-6">
                <Link
                  href={`${APP_URL}/registrieren`}
                  className="cta cta-primary cta-lg"
                >
                  {t.dealer.cta}
                  <span className="cta-arrow">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <ul className="dealer-bullets">
                {t.dealer.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="db-icon">
                      <Check size={12} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="dealer-orbit" aria-hidden="true">
            <div className="orbit-ring r1" />
            <div className="orbit-ring r2" />
            <div className="orbit-ring r3" />
            <div className="orbit-dot" />
            <div className="orbit-core">
              <Image
                src="/icon-light.svg"
                alt=""
                width={88}
                height={88}
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 dark:opacity-100"
              />
              <Image
                src="/logo.svg"
                alt=""
                width={88}
                height={88}
                className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 dark:opacity-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui-custom/Reveal";

export function FAQSection() {
  const { t } = useLang();
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="pf-section">
      <div className="pf-container faq-container">
        <Reveal className="eyebrow">{t.faq.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title" delay={80}>
          {t.faq.title}
        </Reveal>

        <div className="faq-list">
          {t.faq.items.map((it, i) => (
            <Reveal key={i} delay={120 + i * 60}>
              <div className={`faq-item glass ${open === i ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{it.q}</span>
                  <span className="faq-chev">
                    <ChevronDown size={18} />
                  </span>
                </button>
                <div className="faq-a-wrap">
                  <div className="faq-a">{it.a}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

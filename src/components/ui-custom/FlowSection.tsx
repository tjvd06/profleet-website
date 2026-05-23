"use client";

import { useLang } from "@/components/providers/language-provider";
import { Reveal } from "@/components/ui-custom/Reveal";

export function FlowSection() {
  const { t } = useLang();

  return (
    <section id="flow" className="pf-section pf-section-dim">
      <div className="pf-container">
        <Reveal className="eyebrow">{t.flow.eyebrow}</Reveal>
        <Reveal as="h2" className="section-title" delay={80}>
          {t.flow.title}
        </Reveal>

        <div className="flow-grid">
          {t.flow.steps.map((s, i) => (
            <Reveal key={i} delay={120 + i * 80}>
              <div className="flow-card glass">
                <div className="flow-num">{s.n}</div>
                <h4 className="flow-title">{s.t}</h4>
                <p className="flow-desc">{s.d}</p>
                <div className="flow-spark" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

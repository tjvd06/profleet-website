"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useLang } from "@/components/providers/language-provider";
import type { Content } from "@/lib/i18n";

export function HeroFloatCarousel() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % 3), 4800);
    return () => clearInterval(id);
  }, [autoplay]);

  const slides = [
    <AuctionCard key="a" t={t} />,
    <InstantCard key="i" t={t} />,
    <FilterCard key="f" t={t} />,
  ];

  const slideClass = (i: number) => {
    if (i === idx) return "active";
    if (i < idx) return "prev";
    return "next";
  };

  return (
    <div
      className="float-stack"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="float-cards">
        {slides.map((s, i) => (
          <div key={i} className={`float-slide ${slideClass(i)}`}>
            {s}
          </div>
        ))}
      </div>
      <div className="float-controls">
        <button
          type="button"
          className="float-arrow"
          onClick={() => {
            setAutoplay(false);
            setIdx((idx + 2) % 3);
          }}
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="float-dots">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              type="button"
              className={`float-dot ${i === idx ? "on" : ""}`}
              onClick={() => {
                setAutoplay(false);
                setIdx(i);
              }}
              aria-label={`Demo ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="float-arrow"
          onClick={() => {
            setAutoplay(false);
            setIdx((idx + 1) % 3);
          }}
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function AuctionCard({ t }: { t: Content }) {
  const fc = t.floatCard.auction;
  return (
    <div className="float-card glass-strong">
      <div className="fc-row">
        <span className="fc-tag">{t.paths.auction.tag}</span>
        <span className="fc-live">
          <span className="live-dot" />
          LIVE
        </span>
      </div>
      <div className="fc-title">{fc.title}</div>
      <div className="fc-bids">
        <div className="bid">
          <span className="bid-d">{fc.dealers[0]}</span>
          <span className="bid-p">
            € 489 <small>/Mo</small>
          </span>
        </div>
        <div className="bid winning">
          <span className="bid-d">{fc.dealers[1]}</span>
          <span className="bid-p">
            € 462 <small>/Mo</small>
          </span>
          <span className="bid-flag">{fc.best}</span>
        </div>
        <div className="bid">
          <span className="bid-d">{fc.dealers[2]}</span>
          <span className="bid-p">
            € 471 <small>/Mo</small>
          </span>
        </div>
      </div>
      <div className="fc-meta">
        <span>{fc.meta[0]}</span>
        <span className="fc-sep">·</span>
        <span>{fc.meta[1]}</span>
      </div>
    </div>
  );
}

function InstantCard({ t }: { t: Content }) {
  const fc = t.floatCard.instant;
  return (
    <div className="float-card glass-strong">
      <div className="fc-row">
        <span className="fc-tag fc-tag-instant">{t.paths.instant.tag}</span>
        <span className="fc-save">{fc.save}</span>
      </div>
      <div className="fc-title">{fc.title}</div>
      <div className="fc-product">
        <div className="fc-img" aria-hidden="true">
          <svg viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet" className="h-full w-full">
            <path
              d="M8 42 L20 26 Q24 22 32 22 L68 22 Q76 22 80 26 L92 42 L92 50 L78 50 L78 46 Q78 42 74 42 L26 42 Q22 42 22 46 L22 50 L8 50 Z"
              fill="currentColor"
              opacity="0.18"
            />
            <circle cx="28" cy="50" r="6" fill="currentColor" opacity="0.4" />
            <circle cx="72" cy="50" r="6" fill="currentColor" opacity="0.4" />
          </svg>
        </div>
        <div className="fc-specs">
          {fc.specs.map((s, i) => (
            <div key={i} className="fc-spec">
              <span>{s[0]}</span>
              <strong>
                {s[1]}
                {s[2] && <small>{s[2]}</small>}
              </strong>
            </div>
          ))}
        </div>
      </div>
      <div className="fc-meta">
        <span>{fc.meta[0]}</span>
        <span className="fc-sep">·</span>
        <span>{fc.meta[1]}</span>
      </div>
    </div>
  );
}

function FilterCard({ t }: { t: Content }) {
  const fc = t.floatCard.filter;
  return (
    <div className="float-card glass-strong">
      <div className="fc-row">
        <span className="fc-tag">{fc.tag}</span>
        <span className="fc-count">{fc.count}</span>
      </div>
      <div className="fc-search">
        <span className="inline-flex opacity-50">
          <Search size={14} />
        </span>
        <span className="fc-search-text">{fc.searchPlaceholder}</span>
      </div>
      <div className="fc-chips">
        {fc.chips.map((c, i) => (
          <span key={i} className={`fc-chip ${i < 2 ? "on" : ""}`}>
            {c}
          </span>
        ))}
      </div>
      <div className="fc-results">
        {fc.results.map((r, i) => (
          <div key={i} className="fc-result">
            <span className={`fc-result-dot ${["a", "b", "c"][i]}`} />
            {r[0]}
            <span className="fc-result-price">{r[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

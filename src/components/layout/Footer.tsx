"use client";

import Link from "next/link";
import { BrandMark } from "@/components/ui-custom/BrandMark";
import { useLang } from "@/components/providers/language-provider";
import { APP_URL } from "@/lib/site";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="pf-footer">
      <div className="pf-container footer-grid">
        <div>
          <div className="brand-footer">
            <BrandMark size={32} footer />
            <span>proFleet</span>
          </div>
          <p className="footer-tag">{t.footer.tagline}</p>
        </div>
        <div>
          <h5 className="footer-h">{t.footer.platform}</h5>
          <ul>
            <li>
              <Link href="/so-funktionierts">{t.footer.links.forCompanies}</Link>
            </li>
            <li>
              <Link href="/fuer-haendler">{t.footer.links.forDealers}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="footer-h">{t.footer.legal}</h5>
          <ul>
            <li>
              <Link href="#">{t.footer.links.tac}</Link>
            </li>
            <li>
              <Link href="#">{t.footer.links.privacy}</Link>
            </li>
            <li>
              <Link href="/impressum">{t.footer.links.imprint}</Link>
            </li>
            <li>
              <Link href="#">{t.footer.links.cookies}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="pf-container footer-bottom">
        <span>{t.footer.copyright}</span>
        <Link href={`${APP_URL}/anmelden`}>{t.nav.signIn}</Link>
      </div>
    </footer>
  );
}

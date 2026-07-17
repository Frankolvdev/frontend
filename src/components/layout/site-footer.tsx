import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__grid">
        <div className="site-footer__intro">
          <BrandMark />
          <p>{siteConfig.description}</p>
        </div>

        <div className="site-footer__column">
          <span className="site-footer__title">Plataforma</span>
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="site-footer__column">
          <span className="site-footer__title">Legal</span>
          {siteConfig.legal.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="site-container site-footer__bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Diseñado para experiencias de moda con IA.</span>
      </div>
    </footer>
  );
}

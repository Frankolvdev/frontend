"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <BrandMark />

        <nav className="desktop-navigation" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-actions">
          <Link className="button button--ghost" href={siteConfig.actions.signIn}>
            Iniciar sesión
          </Link>
          <Link className="button button--primary" href={siteConfig.actions.getStarted}>
            Comenzar
          </Link>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        id="mobile-navigation"
      >
        <nav className="mobile-navigation" aria-label="Navegación móvil">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-actions">
          <Link className="button button--secondary" href={siteConfig.actions.signIn}>
            Iniciar sesión
          </Link>
          <Link className="button button--primary" href={siteConfig.actions.getStarted}>
            Crear cuenta
          </Link>
        </div>
      </div>
    </header>
  );
}

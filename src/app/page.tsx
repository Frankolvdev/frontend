import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main>
      <section className="home-intro">
        <div className="home-intro__glow" aria-hidden="true" />
        <div className="site-container home-intro__content">
          <span className="eyebrow">Nueva generación de Try-On</span>
          <h1>
            Prueba cualquier estilo.
            <span> Antes de vestirlo.</span>
          </h1>
          <p>
            Visualiza ropa y calzado sobre cualquier persona con resultados
            profesionales impulsados por inteligencia artificial.
          </p>

          <div className="home-intro__actions">
            <Link className="button button--primary button--large" href={siteConfig.actions.getStarted}>
              Crear mi primera prueba
            </Link>
            <Link className="button button--secondary button--large" href="/#how-it-works">
              Ver cómo funciona
            </Link>
          </div>

          <div className="home-intro__status" aria-label="Características principales">
            <span>Ropa y calzado</span>
            <span>Procesamiento seguro</span>
            <span>API profesional</span>
          </div>
        </div>
      </section>

      <section className="layout-preview" id="product">
        <div className="site-container">
          <div className="layout-preview__panel">
            <span className="layout-preview__label">Base del producto</span>
            <h2>Una experiencia creada para convertir ideas en resultados.</h2>
            <p>
              En los próximos módulos incorporaremos el hero visual, las
              demostraciones de producto, precios y acceso a la plataforma.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

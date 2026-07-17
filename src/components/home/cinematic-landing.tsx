"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./cinematic-landing.module.css";

const rails = [
  ["/assets/editorial/look-01.svg", "/assets/editorial/look-02.svg", "/assets/editorial/look-03.svg"],
  ["/assets/editorial/look-04.svg", "/assets/editorial/look-05.svg", "/assets/editorial/look-06.svg"],
  ["/assets/editorial/look-02.svg", "/assets/editorial/look-06.svg", "/assets/editorial/look-01.svg"],
];

const looks = [
  { label: "Editorial Red", before: "/assets/editorial/look-01.svg", after: "/assets/editorial/look-04.svg" },
  { label: "Midnight Silk", before: "/assets/editorial/look-03.svg", after: "/assets/editorial/look-05.svg" },
  { label: "Street Couture", before: "/assets/editorial/look-02.svg", after: "/assets/editorial/look-06.svg" },
];

export function CinematicLanding() {
  const [activeLook, setActiveLook] = useState(0);
  const [compare, setCompare] = useState(56);
  const current = looks[activeLook];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroNoise} />
        <div className={styles.heroGlow} />

        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <span />
            AI FASHION ENGINE
          </div>

          <h1>
            Fashion,
            <br />
            reimagined
            <em> by intelligence.</em>
          </h1>

          <p>
            Cambia ropa y calzado sobre cualquier fotografía con una experiencia
            visual creada para campañas, catálogos y contenido profesional.
          </p>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/register">
              Crear mi primer Try-On
              <span>↗</span>
            </Link>
            <a className={styles.textButton} href="#experience">
              Explorar la experiencia
              <span>↓</span>
            </a>
          </div>

          <div className={styles.heroStats}>
            <div><strong>4K</strong><span>Salida visual</span></div>
            <div><strong>12s</strong><span>Generación promedio</span></div>
            <div><strong>24/7</strong><span>Infraestructura activa</span></div>
          </div>
        </div>

        <div className={styles.fashionWall} aria-label="Galería animada de moda">
          {rails.map((rail, railIndex) => (
            <div
              className={`${styles.rail} ${railIndex % 2 ? styles.railReverse : ""}`}
              key={railIndex}
            >
              {[...rail, ...rail].map((src, imageIndex) => (
                <figure className={styles.railCard} key={`${src}-${imageIndex}`}>
                  <img src={src} alt="" />
                  <figcaption>
                    <span>AI LOOK 0{(imageIndex % 3) + 1}</span>
                    <strong>{["Couture", "Studio", "Editorial"][imageIndex % 3]}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
          <div className={styles.wallFade} />
        </div>

        <div className={styles.scrollCue}>
          <span />
          Scroll to transform
        </div>
      </section>

      <section className={styles.statement}>
        <div className={styles.statementTrack}>
          {["UPLOAD", "STYLE", "GENERATE", "COMPARE", "EXPORT", "UPLOAD", "STYLE", "GENERATE"].map((word, index) => (
            <span key={`${word}-${index}`}>{word}<i>✦</i></span>
          ))}
        </div>
      </section>

      <section className={styles.experience} id="experience">
        <div className={styles.sectionIntro}>
          <span>01 / INTERACTIVE EXPERIENCE</span>
          <h2>No imagines el resultado.<br />Muévelo.</h2>
          <p>
            Una vista previa viva, construida para que el usuario entienda el producto
            antes de registrarse.
          </p>
        </div>

        <div className={styles.experienceGrid}>
          <div className={styles.comparison}>
            <img src={current.before} alt="Imagen original" />
            <div className={styles.afterClip} style={{ width: `${compare}%` }}>
              <img src={current.after} alt="Resultado virtual try-on" />
            </div>
            <div className={styles.compareLine} style={{ left: `${compare}%` }}>
              <span>↔</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={compare}
              onChange={(event) => setCompare(Number(event.target.value))}
              aria-label="Comparar original y resultado"
            />
            <div className={styles.comparisonLabels}>
              <span>ORIGINAL</span>
              <span>AI RESULT</span>
            </div>
          </div>

          <aside className={styles.lookPanel}>
            <div className={styles.panelTop}>
              <span>LIVE STUDIO</span>
              <i>● ONLINE</i>
            </div>
            <h3>Selecciona una dirección visual.</h3>
            <div className={styles.lookOptions}>
              {looks.map((look, index) => (
                <button
                  className={activeLook === index ? styles.lookActive : ""}
                  key={look.label}
                  onClick={() => setActiveLook(index)}
                  type="button"
                >
                  <img src={look.after} alt="" />
                  <span>0{index + 1}</span>
                  <strong>{look.label}</strong>
                  <i>↗</i>
                </button>
              ))}
            </div>
            <div className={styles.processing}>
              <div>
                <span>PROCESSING QUALITY</span>
                <strong>Ultra</strong>
              </div>
              <div className={styles.processingBar}><span /></div>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.editorial}>
        <div className={styles.editorialImage}>
          <img src="/assets/editorial/look-05.svg" alt="Editorial de moda generado con IA" />
          <span className={styles.imageNumber}>02</span>
        </div>
        <div className={styles.editorialCopy}>
          <span>DESIGNED FOR IMPACT</span>
          <h2>De una fotografía a una campaña completa.</h2>
          <p>
            Crea variaciones de vestuario sin reconstruir toda la sesión. Mantén la
            identidad, cambia la propuesta y acelera decisiones creativas.
          </p>
          <div className={styles.editorialPoints}>
            <article><strong>01</strong><span>Ropa y calzado</span></article>
            <article><strong>02</strong><span>Ajuste visual configurable</span></article>
            <article><strong>03</strong><span>Historial y exportación</span></article>
          </div>
        </div>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.sectionIntro}>
          <span>03 / BUILT FOR REAL WORK</span>
          <h2>Más que una imagen bonita.</h2>
        </div>
        <div className={styles.capabilityGrid}>
          <article className={styles.capabilityLarge}>
            <div>
              <span>CREATORS</span>
              <h3>Un estudio disponible a cualquier hora.</h3>
            </div>
            <img src="/assets/editorial/look-06.svg" alt="" />
          </article>
          <article>
            <span>ECOMMERCE</span>
            <h3>Visuales para catálogo sin fricción.</h3>
            <p>Prueba múltiples prendas y conserva una línea visual coherente.</p>
          </article>
          <article>
            <span>AGENCIES</span>
            <h3>Iteraciones rápidas para clientes.</h3>
            <p>Reduce tiempos entre concepto, revisión y entrega.</p>
          </article>
          <article className={styles.capabilityAccent}>
            <span>API READY</span>
            <h3>Preparado para integrarse a operaciones reales.</h3>
            <Link href="/register">Explorar la plataforma ↗</Link>
          </article>
        </div>
      </section>

      <section className={styles.finalBanner}>
        <div className={styles.finalBackdrop}>
          <img src="/assets/editorial/look-04.svg" alt="" />
          <img src="/assets/editorial/look-01.svg" alt="" />
          <img src="/assets/editorial/look-06.svg" alt="" />
        </div>
        <div className={styles.finalContent}>
          <span>THE NEXT FIT IS YOURS</span>
          <h2>Haz que cada idea<br />se pueda vestir.</h2>
          <Link href="/register">Comenzar ahora <span>↗</span></Link>
        </div>
      </section>
    </div>
  );
}

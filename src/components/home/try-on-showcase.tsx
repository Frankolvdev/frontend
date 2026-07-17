"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SparklesIcon } from "@/components/icons/product-icons";
import styles from "./try-on-showcase.module.css";

export function TryOnShowcase() {
  const [position, setPosition] = useState(54);

  return (
    <section className={styles.section} id="showcase">
      <Container>
        <div className={styles.heading}>
          <span className={styles.kicker}>
            <SparklesIcon />
            Comparación interactiva
          </span>
          <h2>Observa el cambio antes de generar.</h2>
          <p>
            Mueve el control para comparar la fotografía original con el
            resultado de Virtual Try-On.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.comparison}>
            <div className={styles.stage}>
              <img
                className={styles.image}
                src="/assets/showcase-before.svg"
                alt="Fotografía original antes del Virtual Try-On"
              />

              <div
                className={styles.afterLayer}
                style={{ width: `${position}%` }}
              >
                <img
                  className={styles.afterImage}
                  src="/assets/showcase-after.svg"
                  alt="Resultado después del Virtual Try-On"
                />
              </div>

              <div
                className={styles.divider}
                style={{ left: `${position}%` }}
                aria-hidden="true"
              >
                <span className={styles.handle}>
                  <i />
                  <i />
                </span>
              </div>

              <span className={`${styles.label} ${styles.beforeLabel}`}>
                Original
              </span>
              <span className={`${styles.label} ${styles.afterLabel}`}>
                Try-On
              </span>

              <input
                className={styles.range}
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                aria-label="Comparar fotografía original y resultado Try-On"
              />
            </div>

            <div className={styles.meta}>
              <div>
                <span>Modelo</span>
                <strong>Editorial v1</strong>
              </div>
              <div>
                <span>Resolución</span>
                <strong>Alta calidad</strong>
              </div>
              <div>
                <span>Procesamiento</span>
                <strong>12.4 segundos</strong>
              </div>
            </div>
          </div>

          <div className={styles.details}>
            <article>
              <span>01</span>
              <div>
                <h3>Conserva identidad y pose</h3>
                <p>
                  El resultado mantiene la composición original mientras adapta
                  la prenda al cuerpo.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Ajuste visual natural</h3>
                <p>
                  Volumen, caída, pliegues e iluminación se integran en una sola
                  generación.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Preparado para ropa y calzado</h3>
                <p>
                  Una experiencia unificada para catálogos, creadores y equipos
                  de comercio electrónico.
                </p>
              </div>
            </article>

            <div className={styles.signal}>
              <span className={styles.signalDot} />
              Motor de generación disponible
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

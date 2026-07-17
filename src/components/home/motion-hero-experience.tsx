"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { experienceAssets } from "@/config/experience-assets";
import { ParticleField } from "./particle-field";
import styles from "./motion-hero-experience.module.css";

export function MotionHeroExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeLook, setActiveLook] = useState(1);
  const [compare, setCompare] = useState(53);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handlePointer = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      setCursor({
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      });
    };

    root.addEventListener("pointermove", handlePointer, { passive: true });
    return () => root.removeEventListener("pointermove", handlePointer);
  }, []);

  const look = experienceAssets.looks[activeLook];

  return (
    <main className={styles.page}>
      <section ref={rootRef} className={styles.hero}>
        <div className={styles.particles}><ParticleField /></div>
        <div
          className={styles.cursorGlow}
          style={{
            transform: `translate3d(${cursor.x * 55}px, ${cursor.y * 38}px, 0)`,
          }}
        />
        <div className={styles.grid} />

        <div className={styles.copy}>
          <div className={styles.kicker}>
            <span className={styles.kickerPulse} />
            AI FASHION EXPERIENCE
          </div>

          <h1>
            See yourself
            <br />
            in any <em>outfit.</em>
          </h1>

          <p>
            Un estudio virtual de moda que combina inteligencia artificial,
            interacción en tiempo real y una presentación visual cinematográfica.
          </p>

          <div className={styles.actions}>
            <Link href="/register" className={styles.primary}>
              Start trying now <span>↗</span>
            </Link>
            <a href="#motion-preview" className={styles.secondary}>
              <i>▶</i> Watch experience
            </a>
          </div>

          <div className={styles.proof}>
            <div className={styles.avatarStack}>
              {experienceAssets.looks.slice(0, 3).map((item) => (
                <img key={item.id} src={item.image} alt="" />
              ))}
            </div>
            <div>
              <strong>Built for fashion creators</strong>
              <span>Responsive, private and ready to evolve.</span>
            </div>
          </div>
        </div>

        <div
          className={styles.modelStage}
          style={{
            transform: `translate3d(${cursor.x * -16}px, ${cursor.y * -10}px, 0)`,
          }}
        >
          <div className={styles.modelHalo}>
            <i /><i /><i />
          </div>
          <img src={experienceAssets.heroCover} alt="AI fashion model" />
          <div className={styles.modelFade} />

          <div className={styles.matchWidget}>
            <span>AI FIT SCORE</span>
            <strong>98.6%</strong>
            <small>PERFECT MATCH</small>
          </div>

          <div className={styles.liveBadge}>
            <i /> LIVE ENGINE
          </div>
        </div>

        <div
          className={styles.studio}
          style={{
            transform: `perspective(1300px) rotateY(${cursor.x * -3}deg) rotateX(${cursor.y * 2}deg)`,
          }}
        >
          <header>
            <div>
              <span>LIVE TRY-ON</span>
              <strong>Preview Studio</strong>
            </div>
            <small><i /> REAL-TIME</small>
          </header>

          <div className={styles.compare}>
            <img src={experienceAssets.looks[2].image} alt="Before" />
            <div className={styles.after} style={{ width: `${compare}%` }}>
              <img src={look.image} alt="After" />
            </div>
            <div className={styles.line} style={{ left: `${compare}%` }}>
              <span>↔</span>
            </div>
            <input
              aria-label="Compare before and after"
              type="range"
              min="10"
              max="90"
              value={compare}
              onChange={(event) => setCompare(Number(event.target.value))}
            />
            <div className={styles.labels}><span>BEFORE</span><span>AFTER</span></div>
            <div className={styles.scan} />
          </div>

          <div className={styles.thumbnails}>
            {experienceAssets.looks.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={activeLook === index ? styles.active : ""}
                onClick={() => setActiveLook(index)}
              >
                <img src={item.image} alt="" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.controls}>
            {[
              ["Fit", 72],
              ["Waist", 61],
              ["Length", 84],
            ].map(([name, value]) => (
              <div key={String(name)}>
                <span>{name}</span>
                <div><i style={{ width: `${value}%` }} /></div>
                <b>{value}%</b>
              </div>
            ))}
          </div>

          <button className={styles.generate} type="button">
            Generate look <span>✦</span>
          </button>
        </div>

        <div className={styles.metrics}>
          {[
            ["◎", "Ultra", "Visual quality"],
            ["ϟ", "Fast", "Processing"],
            ["◇", "Private", "Secure assets"],
            ["∞", "Flexible", "Any workflow"],
          ].map(([icon, title, text]) => (
            <article key={title}>
              <i>{icon}</i>
              <strong>{title}</strong>
              <span>{text}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="motion-preview" className={styles.preview}>
        <div className={styles.previewCopy}>
          <span>MOTION FOUNDATION / 01</span>
          <h2>Not just images. A responsive visual system.</h2>
          <p>
            Este primer bloque introduce el sistema de movimiento: partículas
            Canvas, profundidad ligada al cursor, comparador interactivo,
            paneles inclinables y microanimaciones reutilizables.
          </p>
        </div>

        <div className={styles.widgetGrid}>
          <article className={styles.orbitWidget}>
            <div className={styles.orbits}><i /><i /><i /></div>
            <strong>Reactive field</strong>
            <span>Movimiento ambiental que responde al usuario.</span>
          </article>
          <article className={styles.dataWidget}>
            <span>GENERATION SIGNAL</span>
            <div className={styles.wave}>
              {Array.from({ length: 22 }, (_, index) => (
                <i key={index} style={{ height: `${18 + ((index * 19) % 68)}%` }} />
              ))}
            </div>
            <strong>Stable / 98.6</strong>
          </article>
          <article className={styles.lensWidget}>
            <div><i /><i /><i /></div>
            <strong>Depth engine</strong>
            <span>Capas, luz y perspectiva sin una escena 3D pesada.</span>
          </article>
        </div>
      </section>
    </main>
  );
}

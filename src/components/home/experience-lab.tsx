"use client";

import { useState } from "react";
import { Magnetic } from "@/components/effects/magnetic";
import { ParallaxLayer } from "@/components/effects/parallax-layer";
import { Reveal } from "@/components/effects/reveal";
import styles from "./experience-lab.module.css";

const garments = [
  { name: "Noir sculpt", type: "Evening", score: "98.6" },
  { name: "Crimson line", type: "Editorial", score: "97.9" },
  { name: "Silver form", type: "Futurist", score: "96.8" },
];

export function ExperienceLab() {
  const [active, setActive] = useState(0);
  const [processing, setProcessing] = useState(false);

  const generate = () => {
    if (processing) return;
    setProcessing(true);
    window.setTimeout(() => {
      setActive((current) => (current + 1) % garments.length);
      setProcessing(false);
    }, 1100);
  };

  return (
    <section className={styles.lab}>
      <ParallaxLayer className={styles.ambient} speed={0.08}>
        <div className={styles.ambientOrb} />
      </ParallaxLayer>

      <Reveal className={styles.heading}>
        <span>INTERACTIVE SYSTEM / 02</span>
        <h2>The interface behaves like a living fashion instrument.</h2>
        <p>
          Cada componente responde al movimiento, al scroll y a las decisiones
          del usuario. No es una colección de imágenes: es un sistema visual.
        </p>
      </Reveal>

      <div className={styles.stage}>
        <Reveal className={styles.lookRail} delay={100}>
          {garments.map((garment, index) => (
            <button
              key={garment.name}
              type="button"
              onClick={() => setActive(index)}
              className={active === index ? styles.activeLook : ""}
            >
              <i>{String(index + 1).padStart(2, "0")}</i>
              <span>
                <strong>{garment.name}</strong>
                <small>{garment.type}</small>
              </span>
              <b>{garment.score}</b>
            </button>
          ))}
        </Reveal>

        <Reveal className={styles.core} delay={180}>
          <div className={styles.radar}>
            <i /><i /><i /><i />
            <span>AI</span>
          </div>
          <div className={styles.coreCopy}>
            <small>ACTIVE LOOK</small>
            <strong>{garments[active].name}</strong>
            <span>Fit confidence {garments[active].score}%</span>
          </div>
          <div className={styles.telemetry}>
            {["FORM", "LIGHT", "TEXTURE", "FIT"].map((label, index) => (
              <div key={label}>
                <span>{label}</span>
                <i><b style={{ width: `${68 + ((active + index) * 7) % 30}%` }} /></i>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.command} delay={260}>
          <header>
            <span>GENERATION COMMAND</span>
            <i className={processing ? styles.busy : ""} />
          </header>

          <div className={styles.signal}>
            {Array.from({ length: 36 }, (_, index) => (
              <i
                key={index}
                style={{
                  height: `${16 + ((index * 23 + active * 17) % 78)}%`,
                  animationDelay: `${index * 28}ms`,
                }}
              />
            ))}
          </div>

          <div className={styles.commandMeta}>
            <div><small>ENGINE</small><strong>VTON-X</strong></div>
            <div><small>STATUS</small><strong>{processing ? "RUNNING" : "READY"}</strong></div>
          </div>

          <Magnetic strength={0.14}>
            <button
              type="button"
              className={styles.run}
              onClick={generate}
              disabled={processing}
            >
              {processing ? "Generating…" : "Generate next look"}
              <span>✦</span>
            </button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}

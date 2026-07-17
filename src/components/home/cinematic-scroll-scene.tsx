"use client";

import { useMemo, useState } from "react";
import { ScrollScene } from "@/components/effects/scroll-scene";
import { experienceAssets } from "@/config/experience-assets";
import styles from "./cinematic-scroll-scene.module.css";

const chapters = [
  {
    eyebrow: "01 / INPUT",
    title: "Upload a body reference.",
    text: "La experiencia comienza con una imagen clara y una interfaz que guía sin romper la inmersión.",
  },
  {
    eyebrow: "02 / STYLE",
    title: "Choose the visual direction.",
    text: "Cada look transforma el ambiente, la iluminación y la composición de la escena.",
  },
  {
    eyebrow: "03 / GENERATE",
    title: "Watch the system think.",
    text: "El motor visual revela proceso, confianza y transformación en lugar de ocultarlo detrás de una espera vacía.",
  },
  {
    eyebrow: "04 / RESULT",
    title: "Compare. Refine. Keep exploring.",
    text: "El resultado se convierte en una experiencia editable y no en una imagen estática.",
  },
];

export function CinematicScrollScene() {
  const [progress, setProgress] = useState(0);

  const activeChapter = Math.min(
    chapters.length - 1,
    Math.floor(progress * chapters.length),
  );

  const chapterProgress =
    progress * chapters.length - Math.floor(progress * chapters.length);

  const visualIndex = Math.min(
    experienceAssets.looks.length - 1,
    activeChapter,
  );

  const sceneStyle = useMemo(
    () =>
      ({
        "--progress": progress,
        "--chapter-progress": chapterProgress,
      }) as React.CSSProperties,
    [progress, chapterProgress],
  );

  return (
    <ScrollScene
      className={styles.scene}
      height={380}
      onProgress={setProgress}
    >
      <div className={styles.sticky} style={sceneStyle}>
        <div className={styles.backdrop}>
          {experienceAssets.looks.map((look, index) => (
            <img
              key={look.id}
              src={look.image}
              alt=""
              className={index === visualIndex ? styles.visible : ""}
            />
          ))}
          <div className={styles.colorWash} />
          <div className={styles.scanGrid} />
        </div>

        <div className={styles.content}>
          <div className={styles.copy}>
            <span>{chapters[activeChapter].eyebrow}</span>
            <h2>{chapters[activeChapter].title}</h2>
            <p>{chapters[activeChapter].text}</p>

            <div className={styles.chapterRail}>
              {chapters.map((chapter, index) => (
                <button
                  type="button"
                  key={chapter.eyebrow}
                  className={index === activeChapter ? styles.active : ""}
                  aria-label={`Chapter ${index + 1}`}
                >
                  <i />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.device}>
            <div className={styles.deviceGlow} />
            <div className={styles.deviceHeader}>
              <span>LIVE TRANSFORMATION</span>
              <b>{Math.round(progress * 100)}%</b>
            </div>

            <div className={styles.viewport}>
              <img
                src={experienceAssets.looks[visualIndex].image}
                alt={experienceAssets.looks[visualIndex].label}
              />
              <div className={styles.bodyScan}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.focusBox}>
                <span>SUBJECT LOCKED</span>
                <b>{97 + activeChapter * 0.4}%</b>
              </div>
              <div className={styles.processingLine} />
            </div>

            <div className={styles.deviceFooter}>
              <div>
                <span>LOOK</span>
                <strong>{experienceAssets.looks[visualIndex].label}</strong>
              </div>
              <div>
                <span>MODE</span>
                <strong>{activeChapter < 2 ? "PREVIEW" : "GENERATE"}</strong>
              </div>
              <div>
                <span>ENGINE</span>
                <strong>VTON-X</strong>
              </div>
            </div>
          </div>

          <aside className={styles.telemetry}>
            <div className={styles.orbital}>
              <i />
              <i />
              <i />
              <span>{activeChapter + 1}</span>
            </div>

            <div className={styles.signal}>
              {Array.from({ length: 18 }, (_, index) => (
                <i
                  key={index}
                  style={{
                    height: `${20 + ((index * 17 + activeChapter * 11) % 72)}%`,
                  }}
                />
              ))}
            </div>

            <div className={styles.stats}>
              <div>
                <span>FIT</span>
                <b>{96 + activeChapter}%</b>
              </div>
              <div>
                <span>LIGHT</span>
                <b>{88 + activeChapter * 2}%</b>
              </div>
              <div>
                <span>DETAIL</span>
                <b>{91 + activeChapter}%</b>
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.bottomProgress}>
          <i style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </ScrollScene>
  );
}

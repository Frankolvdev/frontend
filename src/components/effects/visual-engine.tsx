"use client";

import { useEffect, useState } from "react";
import styles from "./visual-effects.module.css";

export function VisualEngine() {
  const [progress, setProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };

    const requestScrollUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    const updatePointer = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    updateScroll();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className={styles.pointerAura}
        style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }}
      />
      <div aria-hidden="true" className={styles.noise} />
      <div aria-hidden="true" className={styles.scrollTrack}>
        <i style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <aside className={styles.motionDock} aria-label="Experience status">
        <span><i /> LIVE</span>
        <b>{Math.round(progress).toString().padStart(2, "0")}</b>
        <small>SCROLL</small>
      </aside>
    </>
  );
}

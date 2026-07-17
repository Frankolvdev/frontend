"use client";

import styles from "./scene-transition.module.css";

export function SceneTransition() {
  return (
    <div className={styles.transition} aria-hidden="true">
      <div className={styles.track}>
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index}>
            AI VIRTUAL TRY-ON <i>✦</i>
          </span>
        ))}
      </div>
      <div className={styles.trackReverse}>
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index}>
            FASHION IN MOTION <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

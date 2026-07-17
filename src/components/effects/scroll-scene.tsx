"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type ScrollSceneProps = {
  children: ReactNode;
  className?: string;
  height?: number;
  onProgress?: (progress: number) => void;
};

export function ScrollScene({
  children,
  className = "",
  height = 260,
  onProgress,
}: ScrollSceneProps) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const current = Math.min(1, Math.max(0, -rect.top / travel));

      setProgress(current);
      onProgress?.(current);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [onProgress]);

  const style = {
    "--scene-height": `${height}vh`,
    "--scene-progress": progress,
  } as CSSProperties;

  return (
    <section ref={ref} className={className} style={style}>
      {children}
    </section>
  );
}

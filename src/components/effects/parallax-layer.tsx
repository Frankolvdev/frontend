"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  axis?: "x" | "y";
};

export function ParallaxLayer({
  children,
  className = "",
  speed = 0.12,
  axis = "y",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      setOffset((viewportCenter - elementCenter) * speed);
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
  }, [speed]);

  const style = {
    transform:
      axis === "x"
        ? `translate3d(${offset}px,0,0)`
        : `translate3d(0,${offset}px,0)`,
  } as CSSProperties;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

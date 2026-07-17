"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./visual-effects.module.css";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
};

export function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  distance = 28,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -7% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-distance": `${distance}px`,
  } as CSSProperties;

  return (
    <Component
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}

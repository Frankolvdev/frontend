"use client";

import {
  cloneElement,
  isValidElement,
  type CSSProperties,
  type MouseEvent,
  type ReactElement,
  useRef,
  useState,
} from "react";

type MagneticProps = {
  children: ReactElement<{ style?: CSSProperties }>;
  strength?: number;
};

export function Magnetic({ children, strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0,0,0)");

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    setTransform(`translate3d(${x * strength}px,${y * strength}px,0)`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("translate3d(0,0,0)")}
      style={{ display: "inline-flex" }}
    >
      {isValidElement(children)
        ? cloneElement(children, {
            style: {
              ...children.props.style,
              transform,
              transition: "transform 180ms cubic-bezier(.2,.8,.2,1)",
            },
          })
        : children}
    </div>
  );
}

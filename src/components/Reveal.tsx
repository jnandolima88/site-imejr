"use client";

import { useInView } from "@/hooks/useInView";
import { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;        // ms
  duration?: number;     // ms
  y?: number;            // px de deslocamento inicial
  className?: string;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 800,
  y = 24,
  className,
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.10,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

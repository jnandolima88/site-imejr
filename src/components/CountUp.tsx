"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface CountUpProps {
  end: number;
  suffix?: string;   // ex: "+", "%"
  prefix?: string;
  duration?: number; // ms
}

export default function CountUp({ end, suffix = "", prefix = "", duration = 1800 }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({
    threshold: 0.5,
    rootMargin: "0px 0px -10% 0px",
  });
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
}

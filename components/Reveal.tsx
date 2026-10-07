"use client";

import { useEffect, useRef, useState } from "react";

type Props = React.ComponentPropsWithoutRef<"section">;

export default function Reveal({ className = "", ...props }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <section ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`.trim()} {...props} />;
}

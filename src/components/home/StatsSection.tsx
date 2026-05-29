"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, MapPin, Users, Wrench } from "lucide-react";

const stats = [
  { icon: Sun, value: 200, suffix: "+", label: "Solar Systems Installed" },
  { icon: MapPin, value: 4, suffix: "", label: "Countries Served" },
  { icon: Users, value: 180, suffix: "+", label: "Happy Clients" },
  { icon: Wrench, value: 10, suffix: "+", label: "Years of Experience" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#e8821a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border-4 border-white" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full border-4 border-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 mb-4">
                <Icon className="text-white" size={26} />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                <AnimatedNumber target={value} suffix={suffix} />
              </div>
              <div className="text-white/80 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
